import React ,{useState,useRef,useEffect}from 'react'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import VisibleIcon from '@rsuite/icons/Visible';
import UnvisibleIcon from '@rsuite/icons/Unvisible';
import { Form,Schema,toaster,Message ,Notification,InputGroup,Button ,Panel,FlexboxGrid,DatePicker,ButtonToolbar,RadioGroup,Radio,Checkbox,CheckPicker,Slider,Toggle,DateRangePicker } from 'rsuite';
import { TagLock,Member } from '@rsuite/icons';
import AuthAction from "../../redux/actions/AuthAction"
import {useHistory,Link } from 'react-router-dom'
import "./login.css"
import { useSelector, useDispatch } from 'react-redux'
import ApiAuth from '../../api/ApiAuth';
import ApiVaccin from '../../api/ApiVaccin';

const openNotification=(funcName,desc)=> {
    toaster.push(<Notification
    type={funcName}
    header={funcName}
    duration={3000}
    >
        <p>{desc}</p>
    </Notification>,{placement:"topEnd"})
    
  }

const Register = () => {
    const formRef = useRef()
    const history = useHistory()
    const [loading,setLoading]=useState(false)
    const authReducer = useSelector(state=>state.AuthReducer)
    const [formValue,setFormValue]=useState({
        identifient: '',
        nom: '',
        prenom: '',
        password:'',
        phone: '',
        adresse:'',
        email:'',
        dateNaissance: null,
        malade: false,
        })
    const [formError,setFormError]=useState({})
    const { StringType, NumberType } = Schema.Types;
    const model = Schema.Model({
        email: StringType().isRequired("Entrez une adress mail").isEmail("Entrez un prenom valide"),
        phone: NumberType().isRequired("Enterz votre numero de telephone"),
        password: StringType().isRequired("Entrez un mot de passe").minLength(4,"Le mot de passe doit contient au moins 4 lettre ou ciffres"),
        nom: StringType().isRequired("Entrez un nom valide").containsLetterOnly("Le nom doit contient que des lettres"),
        adresse: StringType().isRequired("Entrez une adresse"),
        prenom: StringType().isRequired("Entrez un prenom valide").containsLetterOnly("Le prenom doit contient que des lettres"),
        identifient:StringType().isRequired("Entrez un nom d'utilisateur").minLength(4,"Le nom d'utilisateur doit contient au moins 4 lettre")
    });
    
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
        console.log(formValue)
        const response = await ApiAuth.signup(formValue)
        if(!response){
            setLoading(false)
            openNotification("warning",'Une erreur à éte survenue.')
            return
        }
        setLoading(false)
        history.push("/login")
      }
    const [visible, setVisible] = React.useState(false);
    const handleChangePassView = () => {
      setVisible(!visible);
    };

    return (
        <FlexboxGrid className="auth-main " align="middle" justify="center">
            <FlexboxGrid.Item className="auth-form "  >
                <Panel className="login-container" style={{width:'500px'}} header={<h3>Inscription</h3>} bordered>
                    <Form 
                        fluid
                        ref={formRef}
                        onChange={formValue => handleValueChange(formValue)}
                        onCheck={formError => handleErrorChange(formError)}
                        formValue={formValue}
                        model={model}
                        checkTrigger="blur"
                        >
                            <Form.Group >
                                <Form.ControlLabel>Carte nationale d'identité | Massar | Passport</Form.ControlLabel>
                                <Form.Control name="identifient"/ >    
                            </Form.Group>
                           
                            <Form.Group>
                                <Form.ControlLabel>Nom</Form.ControlLabel>
                                <Form.Control name="nom" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Prenom</Form.ControlLabel>
                                <Form.Control name="prenom" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Adresse</Form.ControlLabel>
                                <Form.Control rows={3}  name="adresse" />
                            </Form.Group>
                            <Form.Group >
                                <Form.ControlLabel>Date de naissance</Form.ControlLabel>
                                <Form.Control style={{width:300}} name="dateNaissance" accepter={DatePicker}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>E-mail</Form.ControlLabel>
                                <Form.Control name="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Telephone</Form.ControlLabel>
                                <Form.Control name="phone" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Mot de passe</Form.ControlLabel>
                                <InputGroup inside >
                                    <Form.Control type={visible ? 'text' : 'password'} autoComplete="off" name="password"/>
                                    <InputGroup.Button onClick={handleChangePassView}>
                                        {visible ? <UnvisibleIcon /> : <VisibleIcon />}
                                    </InputGroup.Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Malade</Form.ControlLabel>
                                <Form.Control name="malade" accepter={Toggle}/>
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                        <Button style={{width:120}}loading={loading} onClick={handleSubmit} appearance="primary">S'inscrire</Button>
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Link to="/login" >Vous avez déja un compte?</Link>
                                        </div>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default Register
