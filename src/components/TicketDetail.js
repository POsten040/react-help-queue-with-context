import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../context/theme-context";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 
  
  const [theme] = useTheme();

  const styles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }
  
  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button style={styles} onClick={onClickingEdit}>Update Ticket</button>
      <button style={styles} onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;