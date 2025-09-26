import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectHeader from '../../../Components/SelectHeader';
import ConsentIcon from '../../../../components/DPDPIcons/ConsentIcon';

const initialContent = `
  <p>Dear Customer/Data Principal,</p>
  <ol>
    <li>We regret to inform you that a PERSONAL DATA BREACH has been detected at our end at [time] on [date].</li>
    <li>As a result... might have been compromised in many possible ways.</li>
    <li>We are doing our best to take necessary steps...
      <ul>
        <li>a. &lt; Measure-1 &gt;</li>
        <li>b. &lt; Measure-1 &gt;</li>
        <li>c. &lt; ... &gt;</li>
      </ul>
    </li>
    <li>If you have any questions or concerns regarding the data breach...</li>
  </ol>
  <p>Best Regards,<br/>
  [Name of the Consent Manager/DPO]<br/>
  [Phone number(s)]<br/>
  [email]<br/>
  [physical address]<br/>
  [Company’s Signature, etc.]</p>
`;

const ConsentTemplateEditor: React.FC = () => {
    const [content, setContent] = useState(initialContent);
    const [isEditing, setIsEditing] = useState(true);

    return (
        <>
            <SelectHeader
                title="Consent Templates"
                   showRiskLevel={false}
                   leftIcon={<ConsentIcon width={30} height={30} />}



            />
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <strong>Template Name:</strong> Breach Notification
                </div>
                <div>
                    <strong>Sub Type:</strong> Notification
                </div>
                <div>
                    <strong>Template Type:</strong> Breach Notice (Email)
                </div>
                <div>
                    <strong>Language:</strong> English
                </div>
                <div>
                    <strong>Created Date:</strong> 07/17/2024 18:05:45
                </div>
                <div>
                    <strong>Updated Date:</strong> 07/17/2024 18:05:45
                </div>
            </div>
            <div className=" p-4 bg-white border rounded-md shadow">


                <h2 className="text-center text-xl font-bold mb-4">PERSONAL DATA BREACH NOTIFICATION</h2>

                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    readOnly={!isEditing}
                    className="mb-4"
                    modules={{
                        toolbar: isEditing
                            ? [
                                ['bold', 'italic', 'underline'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link'],
                                ['clean'],
                            ]
                            : false,
                    }}
                />

                <div className="flex justify-center mt-4">
                    {/* <div className="space-x-2">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div> */}
                    <div className="space-x-2">
                        <button
                            onClick={() => {
                                // setIsEditing(false);
                                // Handle save here
                                console.log('Saved content:', content);
                            }}
                            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                        >
                            Save
                        </button>
                        <button
                            // onClick={() => {
                            //     setContent(initialContent);
                            //     setIsEditing(false);
                            // }}
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div></>
    );
};

export default ConsentTemplateEditor;
