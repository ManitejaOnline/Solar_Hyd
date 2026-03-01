export default function ServiceAreasPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold text-slate-900">
          Solar Installation in Hyderabad
        </h1>

        <p className="text-lg text-slate-700">
          We connect homeowners across Hyderabad with verified rooftop solar installers.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Service Areas</h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-700">
          <li>Gachibowli</li>
          <li>Kukatpally</li>
          <li>Miyapur</li>
          <li>Kondapur</li>
          <li>Madhapur</li>
          <li>Hitech City</li>
          <li>Uppal</li>
          <li>LB Nagar</li>
          <li>Secunderabad</li>
          <li>Manikonda</li>
        </ul>

        <a
          href="/#lead-form"
          className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
        >
          Get Free Solar Quote
        </a>

      </div>
    </div>
  );
}