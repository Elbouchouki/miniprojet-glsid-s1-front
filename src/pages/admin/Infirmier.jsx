/* eslint-disable no-restricted-globals */
import React ,{useState} from 'react'
import Button from 'rsuite/Button';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Popover ,Whisper,Checkbox,Dropdown,IconButton,Divider} from 'rsuite';
import Placeholder from 'rsuite/Placeholder';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import ToolsIcon from '@rsuite/icons/Tools';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Modal from 'rsuite/Modal';
const { Paragraph } = Placeholder;
const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (
      <Popover title="Description">
        <p>
          <b>Nom:</b> {rowData.Nom}{' '}
        </p>
        <p>
          <b>Prénom:</b> {rowData.Prenom}{' '}
        </p>
        <p>
          <b>Téléphone:</b> {rowData.telephone}{' '}
        </p>
        <p>
          <b>Adresse:</b> {rowData.Adresse}{' '}
        </p>
      </Popover>
    );
  
    return (
      <Cell {...props}>
        <Whisper placement="top" speaker={speaker}>
          <a href='#asdasd'>{rowData[dataKey].toLocaleString()}</a>
        </Whisper>
      </Cell>
    );
  };
  
  const ImageCell = ({ rowData, dataKey, ...props }) => (
    <Cell  {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          background: '#f5f5f5',
          borderRadius: 20,
          marginTop: 2,
          overflow: 'hidden',
          display: 'inline-block'
        }}
      >
        <img src={rowData[dataKey]} width="40" alt='asdasd'/>
      </div>
    </Cell>
  );
  
  const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
    <Cell  {...props} style={{ padding: 0 }}>
      <div style={{ lineHeight: '46px' }}>
        <Checkbox
          value={rowData[dataKey]}
          inline
          onChange={onChange}
          checked={checkedKeys.some(item => item === rowData[dataKey])}
        />
      </div>
    </Cell>
  );
  
  const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
      onClose();
      console.log(eventKey);
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
          <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
          <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
          <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
          <Dropdown.Item eventKey={7}>About</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };
  
  const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
      confirm("Êtes-vous sûr de vouloir supprimer? ");
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <><Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal><Cell {...props} className="link-group">
          <IconButton appearance="subtle" onClick={handleOpen} icon={<EditIcon />} />
          <IconButton appearance="subtle" onClick={handleAction} icon={<TrashIcon />} />
          <Divider vertical />
          <Whisper placement="autoVerticalStart" trigger="click" speaker={renderMenu}>
            <IconButton appearance="subtle" icon={<ToolsIcon />} />
          </Whisper>
        </Cell></>
    )
  };

const Dashboard = () => {
    const data =[
        {
          "id": 1,
          "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=Z",
          "Prenom": "Najwa",
          "Nom": "ZRAIDI",
          "telephone": "069565847",
          "Adresse" :"lot hind",
          "medcinId":5,
          "userId":2,
          "centreId":7
        },
        {
          "id": 2,
          "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=H",
          "Prenom": "Fatiza",
          "Nom": "Houd",
          "telephone": "069565847",
          "Adresse" :"lot hind",
          "medcinId":8,
          "userId":4,
          "centreId":8
        }];
    const [checkedKeys, setCheckedKeys] = useState([]);
    let checked = false;
    let indeterminate = false;
    
    if (checkedKeys.length === data.length) {
        checked = true;
    } else if (checkedKeys.length === 0) {
        checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }
    
    const handleCheckAll = (value, checked) => {
        const keys = checked ? data.map(item => item.id) : [];
        setCheckedKeys(keys);
    }
    const handleCheck = (value, checked) => {
        const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
        setCheckedKeys(keys);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <h2 className="page-header">Infirmier</h2>
            <div className="row">
                <div className="card" style={{width:'100%'}}>
                <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
                <Button color="blue" onClick={handleOpen}>Ajouter un nouveau infirmier</Button>
                  </FlexboxGrid>
                    <Table height={300} data={data} id="table">
                      
                        <Column width={50} align="center">
                            <HeaderCell style={{ padding: 0 }}>
                            <div style={{ lineHeight: '40px' }}>
                                <Checkbox
                                inline
                                checked={checked}
                                indeterminate={indeterminate}
                                onChange={handleCheckAll}
                                />
                            </div>
                            </HeaderCell>
                            <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
                        </Column>
                        <Column height={300} width={100} align="center">
                            <HeaderCell>Avartar</HeaderCell>
                            <ImageCell dataKey="avartar" />
                        </Column>

                        <Column width={150}>
                            <HeaderCell>Nom</HeaderCell>
                            <NameCell dataKey="Nom" />
                        </Column>
                        <Column width={150}>
                            <HeaderCell> Prenom </HeaderCell>
                            <NameCell dataKey="Prenom" />
                        </Column>
                        <Column width={100}>
                            <HeaderCell>Téléphone</HeaderCell>
                            <NameCell dataKey="telephone" />
                        </Column>
                        <Column width={200}>
                            <HeaderCell>Adresse</HeaderCell>
                            <NameCell dataKey="Adresse" />
                        </Column>

                        <Column width={200}>
                            <HeaderCell>Action</HeaderCell>
                            <ActionCell dataKey="id" />
                        </Column>
                    </Table>
                </div>
            </div>
            <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    
    )
}

export default Dashboard
