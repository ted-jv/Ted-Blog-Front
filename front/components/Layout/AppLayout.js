import Header from "./Header/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-2 gap-10">
      <div>
        <Header />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
