import React from "react";
import MainLayout from "../../layout/MainLayout";

const Account = () => {
  return (
    <MainLayout>
      <section>
        <div className="container mx-auto w-auto">
          <h4 className="my-4 px-5">Account Setting</h4>
          <div className="bg-gray-200  min-h-screen items-bottom">
            <div className="flex p-5 ">
              <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                loading="lazy"
              />
              <div className="px-6 pt-3 ">
                <h3 className="font-bold">Marry Doe</h3>
                <h3>marry@gmail.com</h3>
              </div>
            </div>
            <h3 className="mt-1 pt-2 px-5 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis, explicabo molestiae, tenetur odio voluptatem.
            </h3>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Account;
