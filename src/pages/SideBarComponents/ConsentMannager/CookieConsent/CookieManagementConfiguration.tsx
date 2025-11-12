import React, { useState } from 'react';
import { useFormik } from 'formik';

const CookieManagementConfiguration = () => {
  const [isEditable, setIsEditable] = useState(false);

 const formik = useFormik({
  initialValues: {
    CustomizeContent: "Enter Text",
    ThemeBackgroundColor: "Enter Text",
    ThemeTextColor: "Enter Text",
    Position: "Enter Text",
    EssentialCookieContent: "Enter Text",
    AnalyticsCookieContent: "Enter Text",
    TargetingCookieContent: "Enter Text",
    FunctionalCookieContent: "Enter Text",
    UnclassifiedCookieContent: "Enter Text",

    AnalyticsCookiesScript: `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16540124026"></script>
<script>
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-16540124026');
</script>`,

    TargetingCookiesScript: `<script type="text/javascript">
_linkedin_partner_id = "7174492";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
    if (!l) {
        window.lintrk = function(a, b) {
            window.lintrk.q.push([a, b])
        };
        window.lintrk.q = []
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})(window.lintrk);
</script>
<noscript>
    <img height="1" width="1" style="display:none;" alt=""
        src="https://px.ads.linkedin.com/collect/?pid=7174492&fmt=gif" />
</noscript>

<script>
! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '660356983512587');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" 
       src="https://www.facebook.com/tr?id=660356983512587&ev=PageView&noscript=1" />
</noscript>`,

    FunctionalCookiesScript: `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16540124026"></script>
<script>
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-16540124026');
</script>`,
  },
  onSubmit: (values) => {
    console.log("Submitted:", values);
  },
});


  const fields = Object.keys(formik.initialValues) as (keyof typeof formik.values)[];
  const encryptionOptions = ['None', 'SSL/TLS', 'TLS (STARTTLS)'];

  return (
    <div className="bg-white p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Configuration Setting</h2>
        <button
          className="px-6 py-2 btn text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {isEditable ? 'Cancel' : 'Edit'}
        </button>
      </div>

 <form
  onSubmit={formik.handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
>
{fields.map((key) => (
  <React.Fragment key={key}>
    {/* Label */}
    <label className="font-medium text-gray-700 flex items-center justify-between pr-2">
      {key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}
      <span className="text-gray-500">:</span>
    </label>

    {/* Input / Textarea / Display */}
    <div className="flex-1">
      {isEditable ? (
        key.endsWith("Script") ? (
          <textarea
            name={key}
            value={formik.values[key] as string}
            onChange={formik.handleChange}
            rows={Math.min(
              12,
              Math.max(4, (formik.values[key] as string).split("\n").length)
            )} // auto-adjust textarea height
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <input
            name={key}
            type="text"
            value={formik.values[key] as string}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        )
      ) : (
        key.endsWith("Script") ? (
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto whitespace-pre-wrap font-mono">
            {formik.values[key] as string}
          </pre>
        ) : (
          <span className="text-gray-800 block break-all">
            {formik.values[key] as string}
          </span>
        )
      )}
    </div>
  </React.Fragment>
))}



  {isEditable && (
    <div className="mt-6 col-span-2 flex justify-center">
      <button
        type="submit"
        className="px-12 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Save
      </button>
    </div>
  )}
</form>

    </div>
  );
};

export default CookieManagementConfiguration;
