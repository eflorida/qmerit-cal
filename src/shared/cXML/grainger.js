export const graingerPunchOut = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE cXML SYSTEM "http://xml.cxml.org/schemas/cXML/1.2.028/cXML.dtd">
<cXML payloadID="1527000523.2503@equallevel.com" timestamp="2018-05-22T14:48:43+00:00" version="1.0" xml:lang="en">
  <Header>
    <From>
      <Credential domain="NetworkId">
        <Identity>080230982</Identity>
      </Credential>
    </From>
    <To>
      <Credential domain="DUNS">
        <Identity>159148746</Identity>
      </Credential>
    </To>
    <Sender>
      <Credential domain="NetworkId">
        <Identity>080230982</Identity>
        <SharedSecret>805422672</SharedSecret>
      </Credential>
      <UserAgent>Qmerit ePro</UserAgent>
    </Sender>
  </Header>
  <Request deploymentMode="production">
    <PunchOutSetupRequest operation="create">
      <BuyerCookie>d2b6ae992225bd0a9894b5b37f183d81</BuyerCookie>
      <Extrinsic name="User">jdoe12345</Extrinsic>
      <Extrinsic name="UniqueUsername">jdoe12345</Extrinsic>
      <Extrinsic name="UserId">12345</Extrinsic>
      <Extrinsic name="UserEmail">info@equallevel.com</Extrinsic>
      <Extrinsic name="UserFullName">Erik Florida</Extrinsic>
      <Extrinsic name="UserPrintableName">Erik Florida</Extrinsic>
      <Extrinsic name="FirstName">Erik</Extrinsic>
      <Extrinsic name="LastName">Florida</Extrinsic>
      <Extrinsic name="PhoneNumber">555-555-5555</Extrinsic>
      <BrowserFormPost>
        <URL>http://localhost:3000/grainger-punch-in</URL>
      </BrowserFormPost>
      <SupplierSetup>
        <URL>https://ca.gcom.grainger.com/punchout/cxml</URL>
      </SupplierSetup>
      <ShipTo>
        <Address addressID="TEST">
          <Name xml:lang="en">TEST</Name>
          <PostalAddress>
            <Street>123 Street Address</Street>
            <City>Rockville</City>
            <State>MD</State>
            <PostalCode>20855</PostalCode>
            <Country isoCountryCode="US">US</Country>
          </PostalAddress>
        </Address>
      </ShipTo>
    </PunchOutSetupRequest>
  </Request>
</cXML>`;