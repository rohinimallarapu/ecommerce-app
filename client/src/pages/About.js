import React from 'react'
import Layout from '../components/Layouts/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img src='https://th.bing.com/th/id/OIP.AQt6Qy_r_eI6p5HuA2yTBwHaCx?w=288&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
         
          <h4>‘Ecommerce App’</h4>
          We are energetic about discovering things that transcend the commonplace;
          that we think will get your attention and capture it. In addition, to convey 
          these to you wherever you are and at whatever point you believe you have sufficient
          energy to enjoy a bit.So we made an organization to bring you items you will become
          hopelessly enamored with; to allow you to make your very own space, to take advantage
          of those concealed abilities and make your own looks and accumulations; to enable you
          to impart your manifestations to companions to understand that second conclusion, to
          move or be enlivened; and to enable you to shop such that you will discover hypnotizing.


          </p>
        </div>
        </div>
    </Layout>
  )
}

export default About