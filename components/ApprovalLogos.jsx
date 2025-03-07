const ApprovalLogos = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-8 px-6 rounded-lg shadow-md my-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Approved By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img src="/media/images/ministryofeducation.png" className="w-24 h-24 object-contain mb-2" />
            <p className="text-lg font-semibold">Ministry of Education Uganda</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/media/images/ugflag.png" alt="Uganda Flag" className="w-24 h-24 object-contain mb-2" />
            <p className="text-lg font-semibold">Ugandan Government</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/media/images/kenyanflag.png" alt="Kenya Flag" className="w-24 h-24 object-contain mb-2" />
            <p className="text-lg font-semibold">Kenyan Government</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/media/images/internation.png" alt="International Education Body" className="w-24 h-24 object-contain mb-2" />
            <p className="text-lg font-semibold">British Council Of Education</p>
          </div>
          {/* Add more logos/icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default ApprovalLogos;
