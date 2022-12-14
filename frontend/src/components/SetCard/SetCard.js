import React from 'react';
import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '../SaveIcon/SaveIcon';
import useStyles from './styles';

/**
 * Reusable card component for exercise sets with icon buttons for playing, saving,
 * editing and deleting exercise sets.
 * @author Simen
 * @param {object} props
 * @property {string} type Decides which type of card to display.
 * @property {object} formData Contains information about the set.
 * @property {function} onClick1 Lets user edit or play the set.
 * @property {function} onClick2 Lets user delete the set.
 * @property {function} onClick3 Lets user play the set.
 * @returns Card component for given exercise set.
 */
function SetCard({ type, formData, onClick1, onClick2, onClick3 }) {
  const classes = useStyles();

  // Returns different buttons depending on the type of card.
  function iconButtons() {
    if (type === 'favorite' || type === 'completed') {
      return (
        <>
          <SaveIcon id={formData.sets} />
          <IconButton data-testid="playButton" onClick={() => onClick1()}>
            <PlayCircleOutlineIcon className={classes.iconLarge} />
          </IconButton>
        </>
      );
    }
    if (type === 'mySet') {
      return (
        <>
          <IconButton data-testid="commentButton" onClick={() => onClick3()}>
            <CommentIcon />
          </IconButton>
          <IconButton data-testid="editButton" onClick={() => onClick1()}>
            <EditIcon />
          </IconButton>
          <IconButton data-testid="deleteButton" onClick={() => onClick2()}>
            <DeleteOutlineIcon />
          </IconButton>
        </>
      );
    }
    return <></>;
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar className={classes.avatar}>
            {type === 'mySet' ? formData.id : formData.sets}
          </Avatar>
        }
        title={formData.title}
        subheader={
          <>
            <PersonIcon className={classes.iconSmall} />
            {type && `${formData.setOwner} `}
            {type === 'completed' && (
              <>
                <WhatshotIcon className={classes.iconSmall} />
                {`${formData.score}%`}
              </>
            )}
          </>
        }
        action={iconButtons()}
      />
    </Card>
  );
}

export default SetCard;
