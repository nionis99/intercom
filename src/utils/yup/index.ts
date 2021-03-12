import * as yup from 'yup';
import axios from 'axios';
import PhoneN from 'awesome-phonenumber';
import { ObjectSchema } from 'yup';

let countryCode: string | undefined;

export const getCountryCode = async () => {
  try {
    const data = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
    const countryCodeExpression = /loc=([\w]{2})/;
    const results = data.data.match(countryCodeExpression);
    if (results) return results[1];
  } catch (e) {
    console.log(e);
  }

  return undefined;
};

getCountryCode().then((code) => (countryCode = code));

export const formatPhoneNumber = (phoneNumber: string) => {
  try {
    const phone = new PhoneN(phoneNumber, countryCode);
    if (phone.isValid()) return phone.getNumber();
  } catch (e) {
    console.log(e);
  }

  return phoneNumber;
};

const phoneNumber = function (this: ObjectSchema): ObjectSchema {
  return this.test({
    name: 'phoneNumber',
    message: 'phone_number_invalid',
    test: (value: string) => {
      return value.length > 0 ? new PhoneN(value, countryCode).isValid() : true;
    },
  });
};

yup.addMethod(yup.string, 'phoneNumber', phoneNumber);

export default yup;
