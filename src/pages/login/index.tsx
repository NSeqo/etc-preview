import React, { useState } from 'react';
import './index.less';
import { NavBar, WhiteSpace, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";

interface LoginPageProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
    getFieldValue: Function;
  };
  handleSubmit: Function;
}

const LoginPage: React.FC<LoginPageProps> = ({ form, handleSubmit }) => {

  const { getFieldProps, getFieldsValue, getFieldValue } = form;


  const [isPhoneValid, setPhoneValid] = useState(true)
  const checkPhone = () => {
    let val = getFieldValue('phone') as string || "";
    val = val.trim();
    val = val.replaceAll(' ', '');
    if (val.length < 11) {
      //长度不够
      setPhoneValid(false)
    } else {
      setPhoneValid(true)
    }
    return isPhoneValid
  }

  const [isAuthCodeValid, setAuthCodeValid] = useState(true)
  const checkAuthCode = () => {
    let val = getFieldValue('authCode') as string || "";
    val = val.trim();
    val = val.replaceAll(' ', '');
    if (val.length < 6) {
      //长度不够
      setAuthCodeValid(false)
    } else {
      setAuthCodeValid(true)
    }

    return isAuthCodeValid
  }


  // 表单提交之前进行参数校验

  const submit = () => {
    if (checkPhone() && checkAuthCode()) {
      console.log(getFieldsValue())
    }
  }




  // 校验信息

  return (
    <div className="login">
      <NavBar>
        登录
       </NavBar>

      <WhiteSpace size="lg" />

      <div className="inputWrap">
        <img src={require('./imgs/yzm.png')} alt="" />
        <div className="validate">
          <InputItem  {...getFieldProps('phone')} type="phone" placeholder="手机号" onFocus={() => setPhoneValid(true)} />
          <div className={'err ' + (isPhoneValid ? '' : 'msg')}>{isPhoneValid ? null : '请输入完整的手机号'}</div>
        </div>
      </div>


      <WhiteSpace size="sm" />

      <div className="inputWrap input">
        <img src={require('./imgs/yzm.png')} alt="" />
        <div className="validate">
          <InputItem
            {...getFieldProps('authCode')}
            type="number"
            maxLength={6}
            placeholder="验证码"
            onFocus={() => setAuthCodeValid(true)}
          />
          <div className={'err ' + (isAuthCodeValid ? '' : 'msg')}>{isAuthCodeValid ? null : '请输入6位完整的验证码'}</div>
        </div>
        <Button >获取验证码</Button>
      </div>
      <WhiteSpace size="lg" />

      <div className="submit">
        <Button type="primary" onClick={submit}>
          登录
        </Button>
      </div>

      <div className="logo">
        <img src={require('@/static/imgs/logo.png')} alt="" />
      </div>

    </div>
  );
}


export default createForm()(LoginPage)