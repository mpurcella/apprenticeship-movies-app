type FormTypes = {
  children: React.ReactNode;
};

const Form = ({ children }: FormTypes) => {
  return <form className="w-full max-w-576">{children}</form>;
};

export default Form;
