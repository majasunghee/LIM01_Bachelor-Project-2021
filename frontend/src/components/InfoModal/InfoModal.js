import React from 'react';
import {
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core';
import chatimage from '../../assets/images/chatModal.png';
import forstaelseimage from '../../assets/images/forstaelseModal.png';
import ryddesetningerimage from '../../assets/images/ryddeModal.png';
import chatform from '../../assets/images/chatForm.png';
import forstaelseform from '../../assets/images/forstaelseForm.png';
import ryddesetningerform from '../../assets/images/ryddeForm.png';
import useStyles from './styles';

/**
 * This is a modal displaying information on how to create a new chat, forstaelse or
 * ryddeSetninger exercise.
 * @author Maja, Even
 * @param {object} props
 * @property {boolean} showModal Boolean is true if user has clicked on an info button to view more info.
 * @property {function} setShowModal This function sets showModal to true if user has clicked on an
 * info button, and showModal to false if user has clicked to close an open info modal.
 * @returns A modal with the requested information when showModal is true.
 */
const InfoModal = ({ showModal, setShowModal }) => {
  const classes = useStyles();

  const chatText = `For å opprette en Chat-øvelse må man fylle inn de forpliktede feltene. 
  Det er valgfritt om man vil velge bilder for sender og mottaker. 
  Øvelsen består av et spørsmål, med tre svaralternativ hvor kun ett er riktig.`;

  const forstaelseText = `For å opprette en Forståelse-øvelse må man fylle inn alle feltene. 
  Først en melding, gjerne med en påstand. Deretter et ja/nei spørsmål basert på meldingen. 
  Om brukeren skulle velge feil svar, må en forklaring på hvorfor det er feil vises.`;

  const rydde_setningerText = `For å opprette en Rydde Setninger-øvelse må man formulere en setning på minst tre ord. 
  For å legge til flere ord, trykker man på "+"-tegnet, setningen kan være på maks ti ord. 
  Å velge ordklasser for ordene er valgfritt, om man ikke gjør det blir fargekoden grå. 
  Hver ordklasse har en tilhørende fargekode, for å bedre visuell læring.`;
  function setInfoText() {
    if (showModal === 'chat') {
      return (
        <div className={classes.header}>
          <h2>Eksempel på Chat</h2>
          <img
            className={classes.image}
            src={chatimage}
            alt="Preview of chat"
          />
        </div>
      );
    }
    if (showModal === 'forstaelse') {
      return (
        <div className={classes.header}>
          <h2>Eksempel på Forståelse</h2>
          <img
            className={classes.image}
            src={forstaelseimage}
            alt="Preview of forstaelse"
          />
        </div>
      );
    }
    if (showModal === 'rydde_setninger') {
      return (
        <div>
          <h2 className={classes.header}>Eksempel på rydde-setninger</h2>
          <img
            className={classes.image}
            src={ryddesetningerimage}
            alt="Preview of ryddesetninger"
          />
        </div>
      );
    }
    if (showModal === 'createchat') {
      return (
        <div>
          <h2 className={classes.header}>Lage ny chat-oppgave</h2>
          <Typography>{chatText}</Typography>
          <img
            className={classes.image}
            src={chatform}
            alt="Preview of ryddesetninger"
          />
        </div>
      );
    }
    if (showModal === 'createforstaelse') {
      return (
        <div>
          <h2 className={classes.header}>Lage ny forståelse-oppgave</h2>
          <Typography>{forstaelseText}</Typography>
          <img
            className={classes.image}
            src={forstaelseform}
            alt="Preview of ryddesetninger"
          />
        </div>
      );
    }
    if (showModal === 'createrydde_setninger') {
      return (
        <div>
          <h2 className={classes.header}>Lage ny rydde setninger-oppgave</h2>
          <Typography>{rydde_setningerText}</Typography>
          <img
            className={classes.image}
            src={ryddesetningerform}
            alt="Preview of ryddesetninger"
          />
        </div>
      );
    }
    return <></>;
  }

  return (
    <Paper className={classes.root}>
      <Dialog
        open={!!showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>{setInfoText()}</DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowModal(false)}
            color="primary"
            variant="contained"
          >
            Lukk
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default InfoModal;
