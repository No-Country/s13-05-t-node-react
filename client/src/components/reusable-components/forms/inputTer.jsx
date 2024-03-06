const InputTer = ({
  /* eslint-disable */
  register,
  change,
  error,
  /* eslint-disable */
}) => {
  return (
    <>
      <input
        id="terms"
        aria-describedby="terms"
        type="checkbox"
        {...register("checkbox")}
        // {...(register && { ...register("checkbox", { required: true }) })}
        className=" mt-1 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        onChange={change && change}
      />
      <span className="text-red-600">{error ? error : "\u00A0"}</span>
    </>
  );
};

export default InputTer;
