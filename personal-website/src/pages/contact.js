import React from "react";

const Contact = () => (
  <div>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    
  </div>

  
);

export default Contact

// function(e) {
//     if (e.preventDefault(), this.retryCount = 0, this.shouldBlockSubmit && this.shouldBlockSubmit()) this.blockSubmit(a.findDOMNode(this));
//     else {
//         C.call(this, n.CONTACT_FORM_CLICK_SUBMIT, {
//         isDynamic: this.props.isDynamicContactForm
//     });
//     var t = this.props.compData.toEmailAddress;
//     t && "a33012eff368a577d48f52f310c92140" !== t || this.props.reportBI(r.FORM_SUBMIT_INVALID_EMAIL, {
//       email: t
//     });
//     var s = {
//         isDynamic: this.props.isDynamicContactForm,
//         numOfFields: I(this.props.orderedFields, "hidden"),
//         numOfRequiredFields: I(this.props.orderedFields, "required")
//       },
//       i = this.isFormValid();
//     if (!this.isBusy && i) {
//       this.props.reportBI(n.FORM_SUBMIT, {
//         componentId: this.props.id,
//         componentType: this.props.structure.componentType
//       }), C.call(this, n.CONTACT_FORM_SUBMIT_VALIDATION_SUCCESS, s), this.shouldSubmitFallbackRequest = !0, this.isBusy = !0, "message" === this.props.compData.onSubmitBehavior && this.showMessage(this.translatedKeys.submitting);
//       var o = this.props.isExperimentOpen("sendContactFormEmailsViaPong"),
//         p = this.props.isExperimentOpen("longer_timeouts_pong"),
//         l = y.call(this);
//       R(v(this.props.externalBaseUrl || "", o), JSON.stringify(l), T.bind(this, this.getActivityName()), _.bind(this), M(p))
//     } else i || C.call(this, n.CONTACT_FORM_SUBMIT_VALIDATION_FAILURE, s)
//   }
// }

// componentDidUpdate() {
//     let hash = this.props.location.hash.replace('#', '');
//     if (hash) {
//         let node = ReactDOM.findDOMNode(this.refs[hash]);
//         if (node) {
//             node.scrollIntoView();
//         }
//     }
// }

