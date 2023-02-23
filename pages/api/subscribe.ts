const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

async function subscribeEmail(req: { body: { email: string } }, res: {
    json(arg0: { res: any; }): unknown; status: (code: number) => { json: (data: { error: string }) => void } 
}) {
 
    const data = {
      "contacts": [
        {
          "email": req.body.email
        }
      ]
    };

    console.log('Request payload:', data);
    console.log('Request headers:', client.defaultHeaders);
    console.log('Client:', client);
    
    const request = {
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      method: 'PUT',
      body: data
    }
    
    try {
      const [response, body] = await client.request(request);
      console.log('Response status code:', response.statusCode);
      console.log('Response body:', response.body);
      res.json({ res: response.body });
    } catch (error) {
      console.error(error);
      res.json({ res: error });
    }
}

export default subscribeEmail;
