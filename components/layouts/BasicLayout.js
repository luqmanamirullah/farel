import Navbar from "~/components/navbar";
const BasicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BasicLayout;
