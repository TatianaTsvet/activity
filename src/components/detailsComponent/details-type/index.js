import DetailsType from "./details-type";
import { connect } from "react-redux";
import { updateDetailsType } from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    type: state.detailReducers.details.type,
  };
};

export default connect(mapStateToProps, { updateDetailsType })(DetailsType);
