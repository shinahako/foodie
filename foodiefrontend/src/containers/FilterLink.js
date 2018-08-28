// import {connect} from 'react-redux'
// import {setVisibilityFilter} from '../actions'
// import React from 'react'
//
// const Link = ({ active, children, onClick }) => (
//     <button
//         onClick={onClick}
//         disabled={active}
//         style={{
//           marginLeft: '4px',
//         }}
//     >
//       {children}
//     </button>
// )
//
// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter,
// })
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)
