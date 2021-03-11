import React from 'react';
import LayoutContainer from 'components/Layout';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Avatar from 'react-avatar';

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <LayoutContainer className="justify-content-md-center">
      <Container className="d-flex flex-column">
        <Col md={12} className="d-flex flex-column align-items-center my-2 p-0">
          <Avatar src="/images/user.png" className="mb-2" />
          <div>Name</div>
        </Col>
        <Row className="d-flex">
          <div className="d-flex justify-content-center col-lg-6 my-4 p-0">
            <Container className="d-flex flex-column  align-items-center text-center">
              <h6>{t('email')}: fake@fake.com</h6>
              <h6>{t('telephone')}: +37066666666</h6>
              <h6>{t('pin')}: 333</h6>
              <h6>{t('family_members')}: 2</h6>
              <h6>{t('my_cards')}: 2</h6>
              <h6>{t('my_privileges')}: 4</h6>
            </Container>
          </div>
          <div className="d-flex justify-content-center align-items-center col-lg-6 my-4">
            <Container>
              <Row>
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <Button variant="primary" className="w-100">
                    {t('change_pin')}
                  </Button>
                </div>
                <div className="col-lg-6 mb-2">
                  <Button variant="primary" className="w-100">
                    {t('add_cards')}
                  </Button>
                </div>
                <div className="col-lg-12 mb-2">
                  <Button variant="primary" className="w-100">
                    {t('change_contacts')}
                  </Button>
                </div>
                <div className="col-lg-12">
                  <Button variant="secondary" className="w-100">
                    {t('change_password')}
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    </LayoutContainer>
  );
};

export default ProfilePage;
