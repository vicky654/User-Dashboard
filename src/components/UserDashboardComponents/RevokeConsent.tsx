import React, { useEffect, useState } from "react";
import { Alert, Button, Checkbox, Textarea, Card, Divider, Text } from "@mantine/core";
import { AlertTriangle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
import { ConsentAPI } from "../../api/domains/consent.api";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";


import showMessage from "../../utils/showMessage";


interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}



const RevokeConsent = ({ execute, isLoading }: ApiProps) =>  {

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [details, setDetails] = useState("");
  const [confirmed, setConfirmed] = useState(false);
        const UserDetails = useSelector(
         (state: IRootState) => state.auth.user ?? null
       );
         const [data, setData] = useState<any>(null);
       
         const fetchUserData = async () => {
           if (!id) return;
       
           const res = await execute(() => ConsentAPI.consentdetail(id));
           const api = res.data.data;
       
           console.log("Consent Details API Response:", api);
           setData(api);
         };
       
         useEffect(() => {
           fetchUserData();
         }, [id]);
  // const handlseRevoke = () => {


  //   console.log("Revoke consent for ID:", id,details, confirmed);



  //   if (!confirmed) {
  //     // navigate("./complaint-submitted");
  //     alert("Please confirm you understand the consequences before proceeding.");
  //     return;
  //   }
  //      navigate("/complaint-submitted");
  //   // alert(`Consent ${id} revoked successfully.`);
  //   // navigate("/consent-history");
  // };
const handleRevoke = async () => {
  if (!confirmed) {
    showMessage("Please confirm before revoking consent", "error");
    return;
  }

  if (!id) {
    showMessage("Invalid consent ID", "error");
    return;
  }

  try {
    const payload = {
      
      name: UserDetails?.name ?? "",
      email: UserDetails?.email ?? "",
      phone: UserDetails?.phone ?? "",
      request_type_id: data?.revoke_request_type_id ?? "",
      details,
      confirmed,
    };

  
      await execute(() => ConsentAPI.Revoke(payload));
      showMessage("DPAP Settings Updated Successfully", "success");
           navigate("/complaint-submitted");
      

  } catch (error) {
    console.error("Revoke failed", error);
  }
};

console.log("id",  id)


  return (
    <main className="flex justify-center">
      <Card shadow="sm" radius="md" p="lg" className=" ">
        <Text fw={600} size="xl" mb="sm">
          Revoke Consent
        </Text>

        <Text size="sm" c="dimmed" mb="md">
          You are about to revoke consent for{" "}
          <span className="font-semibold  bg-blue-100 px-1 ">
           {data?.processing_activity?.name || "this purpose"}
          </span>{" "}
          with <span className="font-semibold text-gray-900">  {data?.tenant?.tenant_name}</span>.
        </Text>

        <Divider my="sm" />

        {/* Alert Section */}
        <Alert
          icon={<AlertTriangle size={18} />}
          title="Consequences of Revoking Consent"
          color="red"
          variant="light"
          radius="md"
          mb="lg"
        >
          Revoking consent will stop {data?.tenant?.tenant_name} from using your data for  {data?.processing_activity?.name || "this purpose"}. This
          means you may see less relevant ads from them in the future.
        </Alert>

        {/* Request Details */}
        <div className="mb-4">
          <Text fw={500} mb={4}>
            Request Details
          </Text>
          <Textarea
            placeholder="Please provide a detailed description of your request."
            
            minRows={4}
            value={details}
            onChange={(e) => setDetails(e.currentTarget.value)}
          />
        </div>
<Checkbox
  label="I understand the consequences and wish to proceed."
  checked={confirmed}
  onChange={(e) => setConfirmed(e.currentTarget.checked)}
  styles={{
    root: { cursor: "pointer" },
    label: { cursor: "pointer" },
    input: { cursor: "pointer" },
  }}
  mb="md"
/>


        <div className="flex justify-end space-x-3">
          <Button
            variant="default"
            radius="md"
            onClick={() => navigate(`/consent-details/${id}`)}
          >
            Cancel
          </Button>
          <Button
           color="red"
              radius="md"
              variant="filled"
              className="primary-btn"
            onClick={handleRevoke}
          
           
          >
            Revoke Consent
          </Button>
        </div>
      </Card>
    </main>
  );
};


export default withApiHandler(RevokeConsent);


