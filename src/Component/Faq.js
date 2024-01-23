
import './Faq.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faq1 from '../images/faq1.jpg'
const Faq = () => {
  return (
    <>
    <div className='faq1'> <p>Common Queries</p> 
        <div className='faq2'>
       <div className='faq'>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}} >How can I place an order on your website?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          To place an order, simply browse our catalog, select the desired tools, and add them to your cart. Proceed to checkout, provide shipping information, and complete the payment process.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography  sx={{fontFamily:'cursive',fontSize:'23px'}} > What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography  >
          We accept major credit cards, debit cards, and PayPal for online transactions. Our checkout process is secure and ensures the safety of your payment information.
          </Typography>
        </AccordionDetails>
      </Accordion>  

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>Is it safe to enter my credit card information on your website?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Yes, our website uses secure encryption technology to protect your personal and payment information. Your security is our priority.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>What types of Tools do you provide?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We cater to a wide variety of pets, including dogs, cats, birds, small animals like rabbits and hamsters, reptiles, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>What is your shipping policy?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We aim to process and ship orders promptly. Shipping times may vary based on location and product availability. You can find more details about our shipping policies and estimated delivery times on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>Do you offer returns or exchanges?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Yes, we have a hassle-free return and exchange policy. If you're unsatisfied with your purchase or need a different size or variant, please refer to our returns policy for detailed instructions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>How can I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Our dedicated customer support team is available via email, live chat, or phone during business hours to assist with any inquiries, product information, or support-related issues.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%',color:'black'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>Are there any discounts or promotions available?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We regularly offer promotions and discounts. Check our homepage or subscribe to our newsletter to stay updated on the latest deals and special offers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div> 
       <div className='faqs'>
        <img src={faq1} width={1100}/> 
      </div> 
      </div>
      </div>
      {/* https://dt-petty.myshopify.com/cdn/shop/files/grid04.jpg?v=1653389498 */}</>
  )
}

export default Faq