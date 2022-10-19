import Header from "./Header/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="grid grid-rows-2 gap-10">
        <div>
          <Header />
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
