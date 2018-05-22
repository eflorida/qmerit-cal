import React from "react";
// import $ from "jquery";

export class Home extends React.Component {
  
  componentDidMount() {

    console.log('component mounted, making fetch call...');
    // if (document.getElementById('main')) {
    //   document.getElementById('main').innerHTML(htmlTemplate);
    // }
  }

  render() {
    let graingerUrl = 'https://equallevel.com/punchout/cxml_punchout_frame.php?url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fstart%3FtokenId%3D1979015048ad07b5b3-bd16-4a00-b446-e9f2530637c0';

    return (
      <main role="main" className="page-container">
        <object data={graingerUrl} width="100%" height="100%">
          <embed src={graingerUrl} width="100%" height="100%"></embed>
        </object>
      </main>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <main id="main" role="main" className="page-container">
  //         <form method="POST" action="https://equallevel.com/punchout/cxml-punchout-tester" id="punchout_form" encType="application/x-www-form-urlencoded" value={formData}>
  //           <input type="submit" value="Submit" />
  //         </form>
  //       </main>
  //     </div>
  //   )
  // }
}

// let formData = "cXML-urlencoded=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22UTF-8%22%3F%3E%0D%0A%3C%21DOCTYPE+cXML+SYSTEM+%22http%3A%2F%2Fxml.cxml.org%2Fschemas%2FcXML%2F1.2.028%2FcXML.dtd%22%3E%0D%0A%3CcXML+payloadID%3D%221526946037.5805%40equallevel.com%22+timestamp%3D%222018-05-21T23%3A40%3A37%2B00%3A00%22+version%3D%221.0%22+xml%3Alang%3D%22en%22%3E%0D%0A++%3CHeader%3E%0D%0A++++%3CFrom%3E%0D%0A++++++%3CCredential+domain%3D%22NetworkId%22%3E%0D%0A++++++++%3CIdentity%3E080230982%3C%2FIdentity%3E%0D%0A++++++%3C%2FCredential%3E%0D%0A++++%3C%2FFrom%3E%0D%0A++++%3CTo%3E%0D%0A++++++%3CCredential+domain%3D%22DUNS%22%3E%0D%0A++++++++%3CIdentity%3E159148746%3C%2FIdentity%3E%0D%0A++++++%3C%2FCredential%3E%0D%0A++++%3C%2FTo%3E%0D%0A++++%3CSender%3E%0D%0A++++++%3CCredential+domain%3D%22NetworkId%22%3E%0D%0A++++++++%3CIdentity%3E080230982%3C%2FIdentity%3E%0D%0A++++++++%3CSharedSecret%3E805422672%3C%2FSharedSecret%3E%0D%0A++++++%3C%2FCredential%3E%0D%0A++++++%3CUserAgent%3EEqual+Level+PunchOut+Tester%3C%2FUserAgent%3E%0D%0A++++%3C%2FSender%3E%0D%0A++%3C%2FHeader%3E%0D%0A++%3CRequest+deploymentMode%3D%22production%22%3E%0D%0A++++%3CPunchOutSetupRequest+operation%3D%22create%22%3E%0D%0A++++++%3CBuyerCookie%3Ec520f47a62be0f3fd926b0950918e0fc%3C%2FBuyerCookie%3E%0D%0A++++++%3CExtrinsic+name%3D%22User%22%3Ejdoe12345%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22UniqueUsername%22%3Ejdoe12345%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22UserId%22%3E12345%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22UserEmail%22%3Einfo%40equallevel.com%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22UserFullName%22%3EJohn+Doe%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22UserPrintableName%22%3EJohn+Doe%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22FirstName%22%3EJohn%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22LastName%22%3EDoe%3C%2FExtrinsic%3E%0D%0A++++++%3CExtrinsic+name%3D%22PhoneNumber%22%3E555-555-5555%3C%2FExtrinsic%3E%0D%0A++++++%3CBrowserFormPost%3E%0D%0A++++++++%3CURL%3Ehttps%3A%2F%2Fequallevel.com%2Fpunchout%2Fcxml_punchin.php%3C%2FURL%3E%0D%0A++++++%3C%2FBrowserFormPost%3E%0D%0A++++++%3CSupplierSetup%3E%0D%0A++++++++%3CURL%3Ehttps%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml%3C%2FURL%3E%0D%0A++++++%3C%2FSupplierSetup%3E%0D%0A++++++%3CShipTo%3E%0D%0A++++++++%3CAddress+addressID%3D%22TEST%22%3E%0D%0A++++++++++%3CName+xml%3Alang%3D%22en%22%3ETEST%3C%2FName%3E%0D%0A++++++++++%3CPostalAddress%3E%0D%0A++++++++++++%3CStreet%3E123+Street+Address%3C%2FStreet%3E%0D%0A++++++++++++%3CCity%3ERockville%3C%2FCity%3E%0D%0A++++++++++++%3CState%3EMD%3C%2FState%3E%0D%0A++++++++++++%3CPostalCode%3E20855%3C%2FPostalCode%3E%0D%0A++++++++++++%3CCountry+isoCountryCode%3D%22US%22%3EUS%3C%2FCountry%3E%0D%0A++++++++++%3C%2FPostalAddress%3E%0D%0A++++++++%3C%2FAddress%3E%0D%0A++++++%3C%2FShipTo%3E%0D%0A++++%3C%2FPunchOutSetupRequest%3E%0D%0A++%3C%2FRequest%3E%0D%0A%3C%2FcXML%3E%0D%0A&url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml&url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml&url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml&url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml&url=https%3A%2F%2Fca.gcom.grainger.com%2Fpunchout%2Fcxml"

// var formUrl = "/punchout/cxml-punchout-tester";
// var VARIABLES_HELP = {
//   "FromDomain": "Specifies the domain of the FromIdentity parameter.  This is typically set to \"NetworkId\". <br>XPath: <code>From/Credential[domain]</code>",
//   "FromIdentity": "The From credential identifies the originator of the request (the buying organization).  <br>XPath:<br><code>From/Credential/Identity</code>",
//   "ToDomain": "Specifies the domain of the ToIdentity parameter.  This is typically set to \"DUNS\".  <br>XPath: <code>To/Credential[domain]</code>",
//   "ToIdentity": "The To credential identifies the supplier.  Typically this is the suppliers \"DUNS\".  <br>XPath: <code>To/Credential/Identity</code>",
//   "SenderDomain": "Specifies the domain of the SenderIdentity parameter.  This is typically set to \"NetworkId\".  <br>XPath: <code>Sender/Credential[domain]</code>",
//   "SenderIdentity": "The Sender credential identifies the buying organization.  This is sometimes referred to as the username.  <br>XPath:<br><code>Sender/Credential/Identity</code>",
//   "SharedSecret": "The shared secret is used to validate the credentials.  This is sometimes referred to as the password.  <br>XPath:<br><code>Sender/Credential/SharedSecret</code>",
//   "BuyerCookie": "BuyerCookie enables the procurement application to associate a given PunchOutOrderMessage with its originating PunchOutSetupRequest. Therefore, the supplier's website should return this element whenever it appears. Do not use the BuyerCookie to track PunchOut sessions, because it changes for every session, from create, to inspect, to edit."
// };
// var ENTITY_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;' };

// function escapeHtml(string) {
//   return String(string).replace(/[&<>"']/g, function (s) {
//     return ENTITY_MAP[s];
//   });
// }

// function init() {
//   updateURL();
//   updateXML();
//   createTooltips();
//   updateTooltipTitles();
// }

// function onFormSubmit() {
//   updateXML();
//   updateURL($('#url').val());
//   var encodeMethod = $('#encodeMethod').val();
//   if (encodeMethod == 'raw') {
//     $('#punchout_form').attr('action', formUrl);
//     var hiddenField = document.createElement("input");
//     hiddenField.type = 'hidden';
//     hiddenField.name = 'url';
//     hiddenField.value = $('#url').val();
//     $('#punchout_form').append(hiddenField);
//   }
//   return true;
// }

// function createXML() {
//   var xml = $('#cxml').val();
//   var i = 0, e;
//   while ((e = $('#name' + i)) && e.length > 0) {
//     if ($('#name' + i).val() != '') {
//       var enc = escapeHtml($('#value' + i).val());
//       xml = xml.replace('@' + $('#name' + i).val() + '@', enc);
//       xml = xml.replace('@' + $('#name' + i).val() + '@', enc);
//     }
//     i++;
//   }
//   return xml;
// }

// function updateXML() {
//   var xml = createXML();
//   $('#outputXml').text(xml);
//   $('#cxmlUrlencoded').val(xml);
// }

// function updateURL(url) {
//   if (url == undefined) {
//     url = '';
//     $('#url').val(url);
//   }
//   $('#punchout_form').attr('action', url);
//   var i = 0, e;
//   while ((e = $('#name' + i)) && e.length > 0) {
//     if ($('#name' + i).val() == 'SupplierSetupURL') {
//       $('#value' + i).val(url);
//     }
//     i++;
//   }
// }

// function toggleView(view) {
//   var doc = $('#doc'), b = 'basic-view', a = 'advanced-view';
//   if (view == 1) {
//     doc.removeClass(b).addClass(a);
//   }
//   else {
//     doc.addClass(b).removeClass(a);
//   }
// }

// function createTooltips() {
//   $(function () {
//     $('#variablesTable [data-toggle="tooltip"]').tooltip();
//   })
// }

// function updateTooltipTitles() {
//   var i = 0, e;
//   while ((e = $('#name' + i)) && e.length > 0) {
//     var msg = VARIABLES_HELP[$(e).val()] || 'not available'
//     $('#help' + i).attr('title', msg).attr('data-original-title', msg).tooltip('fixTitle');
//     i++;
//   }
// }
