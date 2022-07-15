import { Input } from 'antd';
const InputSearch = ({ placeholder, classStyles, prefix, suffix }: any) => {
  return (
    <Input
      className={classStyles}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default InputSearch;
