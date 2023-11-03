import React from "react";
import { ContainerInput, SearchSVG, Input as InputEMT } from "./styles";

const Input = ({ type, placeholder, handleInputChange }) => {

  const handleChange = (e) => {
    handleInputChange(e);
  }

  return (
    <ContainerInput>
      <InputEMT type={ type } placeholder={ placeholder } onChange={ (e) => handleChange(e) } />
      <SearchSVG viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3037 28.6074C6.41923 28.6074 0 22.1882 0 14.3037C0 6.41923 6.41923 0 14.3037 0C22.1882 0 28.6074 6.41923 28.6074 14.3037C28.6074 22.1882 22.1882 28.6074 14.3037 28.6074ZM14.3037 2.09323C7.56353 2.09323 2.09323 7.57748 2.09323 14.3037C2.09323 21.03 7.56353 26.5142 14.3037 26.5142C21.0439 26.5142 26.5142 21.03 26.5142 14.3037C26.5142 7.57748 21.0439 2.09323 14.3037 2.09323Z" fill="white" />
        <path d="M28.9569 30.0028C28.6918 30.0028 28.4266 29.9051 28.2173 29.6958L25.4263 26.9048C25.0216 26.5001 25.0216 25.8303 25.4263 25.4256C25.831 25.0209 26.5008 25.0209 26.9055 25.4256L29.6965 28.2166C30.1012 28.6212 30.1012 29.2911 29.6965 29.6958C29.4872 29.9051 29.222 30.0028 28.9569 30.0028Z" fill="white" />
      </SearchSVG>
    </ContainerInput>
  );
}

export { Input };