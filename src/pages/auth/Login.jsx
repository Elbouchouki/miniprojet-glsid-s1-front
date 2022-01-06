import React ,{useState,useRef,useEffect}from 'react'
import { Form,Schema,toaster,Message ,InputGroup,Button ,Panel,FlexboxGrid,ButtonToolbar } from 'rsuite';
import { TagLock,Member } from '@rsuite/icons';
import AuthAction from "../../redux/actions/AuthAction"
import {useHistory,Link } from 'react-router-dom'
import "./login.css"
import { useSelector, useDispatch } from 'react-redux'
import ApiAuth from '../../api/ApiAuth';

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    username: StringType().isRequired("Entrez votre nom d'utilisateur."),
    password: StringType().isRequired("Entrez votre mot de passe")
    });

const TextField=({ name, label, accepter,value,icon,errorPlacement, ...props })=>{
    return (
        <Form.Group>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <InputGroup inside>
                <Form.Control name={name} accepter={accepter} errorPlacement={errorPlacement?errorPlacement:"bottomStart"} {...props} />
                <InputGroup.Addon>
                    {icon}
                </InputGroup.Addon>
            </InputGroup>
        </Form.Group>
    )
}
const Login = () => {
    const dispatch = useDispatch()
    
    const authReducer = useSelector(state=>state.AuthReducer)
    const history = useHistory()
    const formRef = useRef()
    const [formValue,setFormValue]=useState({
        username: '',
        password: '',
        })
    const [formError,setFormError]=useState({})
    const [loading,setLoading]=useState(false)
    
    useEffect(() => {
        if(authReducer?.user !== null && authReducer?.user !== undefined){
            history.push("/")
        }
       }
    , [history,authReducer])

    const handleValueChange=(formValue)=>{
        setFormValue(formValue)
    }
    const handleErrorChange=(formError)=>{
        setFormError(formError)
    }
    const handleSubmit= async()=> {
        if (!formRef.current.check()) {
          return;
        }
        setLoading(true)
        const auth =await ApiAuth.signin(formValue.username,formValue.password)
        setLoading(false)
        if(!auth){
            toaster.push(
                <Message type="error" showIcon closable>
                  Votre identifient ou mot de passe est incorrect.
                </Message>
              );
            return;
        }
        localStorage.setItem('user',JSON.stringify(auth.user))
        localStorage.setItem('token',auth.token)
        dispatch(AuthAction.setToken(auth.token))
        dispatch(AuthAction.setUser(auth.user))
        console.log(auth)
        if(auth?.user?.role?.id!==4){
            history.push("/admin")
        }else{
            history.push("/reserving")
        }
      }
    return (
        <FlexboxGrid className="auth-main " align="middle" justify="center">
            <FlexboxGrid.Item className="auth-form "  >
                <Panel className="login-container" header={<h3>Authentification</h3>} bordered>
                    <Form 
                    ref={formRef}
                    onChange={formValue => handleValueChange(formValue)}
                    onCheck={formError => handleErrorChange(formError)}
                    formValue={formValue}
                    model={model}
                    checkTrigger="blur"
                    fluid>
                    <TextField icon={<Member/>}  name="username" label="Identifient" />
                    <div style={{height:10}}></div>
                    <TextField icon={<TagLock/>} name="password" label="Mot de passe" type="password" />
                    <div style={{height:10}}></div>
                    <Form.Group>
                        <ButtonToolbar>
                        <Button style={{width:120}}  loading={loading} onClick={handleSubmit} appearance="primary">Se connecter</Button>
                        <div style={{width:50,display:'inline-block'}}></div><Link to="/register" >Créer un compte?</Link>
                        </ButtonToolbar>
                    </Form.Group>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default Login
