/**
 * Set the type of signatures that can be stored in the WebViewer (default is 2)
 * @method WebViewerInstance#setSignatureType
 * @param {number} [maxSignaturesCount=2] Number of signature webViewer can store
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.setSignatureType('stamp');
  });
 */
import actions from 'actions';

export default store => signatureType => {
  store.dispatch(actions.setSignatureType(signatureType));
};
