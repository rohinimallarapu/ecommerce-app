import React from 'react'
import Layout from '../components/Layouts/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="https://th.bing.com/th/id/OIP.AVxg7Cz3167rsi_unphFOwHaD2?w=414&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="contactus"
          style={{  width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <p>
          <h4>What personal information do we process?</h4>
         </p>

        <p><h4>Do we process any sensitive personal information? </h4>
          </p>

        <p><h4>Do you receive any information from third parties?</h4>
         </p>

        <p><h4>How do you process my information?</h4>
         </p>

        <p><h4>In what situations and with which types of parties do we share personal information?</h4>
         </p>

        <p><h4>How do we keep your information safe?</h4>
         </p>

        <p><h4>What are your rights?</h4>
         </p>

      </div>
    </div>
    </Layout>
  )
}

export default Policy