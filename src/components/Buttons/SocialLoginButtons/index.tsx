import React from 'react';
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';

const SocialLoginButtons = () => {
  const { t } = useTranslation();

  const facebookResponse = (userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    console.log(userInfo);
  };

  const googleResponse = (response: unknown) => {
    console.log(response);
  };

  return (
    <div className="d-flex flex-column mx-4">
      <hr data-content={t('OR')} className="w-100 hr-text" />
      <GoogleLogin
        clientId=""
        onSuccess={googleResponse}
        onFailure={googleResponse}
        className="login-btn justify-content-center my-2 font-weight-bold btn-sm"
        buttonText={t('login_google')}
        disabled
      />
      <FacebookLogin
        appId=""
        fields=""
        callback={facebookResponse}
        onFailure={facebookResponse}
        size="small"
        cssClass="fb login w-100 justify-content-center"
        textButton={t('login_facebook')}
        isDisabled
      />
    </div>
  );
};

export default SocialLoginButtons;
