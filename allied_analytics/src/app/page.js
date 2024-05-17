'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import '../../public/assets/style/style.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Banner from '../../public/assets/images/banner-image.png'
import Trending1 from '../../public/assets/images/trending-image-1.png'
import Trending2 from '../../public/assets/images/trending-image-1.png'
import Trending3 from '../../public/assets/images/trending-image-1.png'
import Trending4 from '../../public/assets/images/trending-image-1.png'
import Release1 from '../../public/assets/images/latest-release-image-1.png'
import Release2 from '../../public/assets/images/latest-release-image-2.png'
import fileIcon from '../../public/assets/icons/file-icon.png'

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };
  const trendingList = [
    {trendingBlockImg:Trending1, trendingBlockTitle:'Global Body Armor Plates Market', trendingBlockDescription:'Global Body Armor Plates Market By Level', trendingBlockDate:'Jul 2023'},
    {trendingBlockImg:Trending2, trendingBlockTitle:'Global Body Armor Plates Market', trendingBlockDescription:'Global Body Armor Plates Market By Level', trendingBlockDate:'Jul 2023'},
    {trendingBlockImg:Trending3, trendingBlockTitle:'Global Body Armor Plates Market', trendingBlockDescription:'Global Body Armor Plates Market By Level', trendingBlockDate:'Jul 2023'},
    {trendingBlockImg:Trending4, trendingBlockTitle:'Global Body Armor Plates Market', trendingBlockDescription:'Global Body Armor Plates Market By Level', trendingBlockDate:'Jul 2023'},
  ]

  const whatmakesUsUniqueList = [
    {description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'},
    {description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'},
    {description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'},
    {description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
  ]
  const resourcesList = [
    {number:'15000+', resourceTitle: 'New Releases', resourceDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit'},
    {number:'80', resourceTitle: 'Paid Datasources', resourceDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit'},
    {number:'450+', resourceTitle: 'Counselors', resourceDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit'},
    {number:'65', resourceTitle: 'Industry Mavens', resourceDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit'},
    {number:'360', resourceTitle: 'Research Methodology', resourceDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit'},
  ]

  return (
    <>
      {/* Banner */}
      <div className='banner-section flex-box align-center'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-detail">
                <h1>Lorem ipsum dolor <span className='highlight-text'> sit amet,</span> adipisicing elit.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, minima iste molestiae perferendis harum ipsum. Excepturi reprehenderit cum quasi quaerat ex consectetur repellat? Eaque, adipisci veniam. Doloribus cumque cupiditate quasi!</p>
                <Link className='highlight-text view-more-link' href="/">View More</Link>
              </div>
              <div className="search-field-box">
                <input placeholder='search' type="text" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-image-box">
          <Image src={Banner} alt="Banner" />
        </div>
      </div>

      {/* Trending */}
      <div className="trending-section section-padding">
        <div className="container">
          <div className="title-box">
            <h2 className='main-title'>Our Trending <span className='highlight-text'>Publications</span></h2>
            <p className='main-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="trending-slider">
          <Slider {...settings}>
            {
              trendingList.map((trending,key) => {
                return(
                  <div key={key} className='trending-box'>
                    <Image src={trending.trendingBlockImg} alt={trending.trendingBlockTitle} />
                    <span className='trending-label'>
                      {trending.trendingBlockDate}
                    </span>
                    <div className="trending-description-box flex-box align-center justify-center">
                      <div className="trending-description-inner-box">
                        <h3 className='trending-title'>
                          {trending.trendingBlockTitle}
                        </h3>
                        <p>{trending.trendingBlockDescription}</p>
                        <Link className='read-more-btn' href='/'>Read More</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
          <Link href='/' className='blue-btn view-all-btn'>View all</Link>
          </div>
        </div>

      </div>

      {/* What makes us unique */}
      <div className="what-makes-us-unique-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="what-makes-us-unique-box">
                <h2 className='main-title'>What makes us <span className='highlight-text'>unique</span> and <span className='highlight-text'>stand alone</span>?</h2>
                <p className='main-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quos molestias quis repellat voluptates veniam at vitae perferendis voluptas earum optio animi recusandae, provident ratione eum quam fugiat dignissimos ad.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="what-makes-us-unique-listing flex-box">
                {
                  whatmakesUsUniqueList.map((whatmakesUsUnique,key)=>{
                    return(
                      <>
                        <div className="what-makes-us-unique-listing-box">
                          <div className="what-makes-us-unique-listing-inner-box flex-box align-center">
                            <Image src={fileIcon} alt="" />
                            <p>{whatmakesUsUnique.description}</p>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="resources-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <div className="resources-showcase-area">
                  {
                    resourcesList.map((resource,key)=>{
                      return(
                        <div key={key} className='resource-showcase-box flex-box align-center'>
                          <div className="resource-showcase-title-box">
                            <span className='resource-showcase-number highlight-text'>{resource.number}</span>
                            <h4>{resource.resourceTitle}</h4>
                          </div>
                          <p className="resource-showcase-description">
                            {resource.resourceDescription}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
            <div className="col-md-6">
                <div className="resource-main-box">
                  <h2 className='main-title'>We Take Resources To The <span className='highlight-text'>Best Policy</span></h2>
                  <p className='main-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic iure labore nobis corporis aperiam dolore tenetur sed aliquam odio illo explicabo nesciunt non aut voluptatum. Deleniti fugiat aliquid molestiae.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Release */}
      <div className="latest-press-release-section section-padding">
        <div className='title-box'>
          <h2 className='main-title'>Latest Press Release</h2>
        </div>
        <div className="row">
          <div className="col-md-6 latest-release-col">
            <div className="press-release-box">
              <div className="press-release-detail-box">
                <small>Jul 10, 2023</small>
                <h5>Green Mining Market Size Projected To Generate A Revenue Of $27,911.3 Million By 2032</h5>
              </div>
              <div className="press-release-image-box">
                <Image src={Release1} alt="Green Mining Market Size Projected To Generate A Revenue Of $27,911.3 Million By 2032"/>
              </div>
            </div>
          </div>
          <div className="col-md-6 latest-release-col">
            <div className="press-release-box">
              <div className="press-release-detail-box">
                <small>Jul 10, 2023</small>
                <h5>Education Computing Devices Market Size Is Projected To Grow At A CAGR Of 14.10% And Generate A Revenue Of $368,072.50 Million By 2032</h5>
              </div>
              <div className="press-release-image-box">
                <Image src={Release2} alt="Education Computing Devices Market Size Is Projected To Grow At A CAGR Of 14.10% And Generate A Revenue Of $368,072.50 Million By 2032"/>
                <Link href="/" className='read-all-btn' >Read all press release</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="call-to-action-section">
        <div className="call-to-action-box section-padding">
          <div className="container">
            <div className='title-box'>
              <h2 className='main-title'>How can we help you?</h2>
              <p className='main-description'><Link href='/' className='get-in-touch-btn highlight-text'>Get in touch</Link> with us or <Link href='/' className='find-office-btn highlight-text'>find an office</Link> closest to you.</p>
            </div>
        </div>
        </div>
      </div>
      
      {/* Get Notification */}
      <div className="get-notification-section section-padding">
        <div className="container">
          <div className='title-box'>
            <h2 className='main-title'>Get Notification</h2>
          </div>
          <Formik
            initialValues={{ categoty: "", frequency: "", email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.categoty) {
                errors.categoty = "Please select category";
              }
   
              if (!values.email) {
                errors.email = "Please enter email address";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.frequency) {
                errors.frequency = "Please select frequency";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    {/* <Field
                      type="text"
                      name="fullname"
                      placeholder="Enter your fullname"
                    /> */}
                    <Field name="categoty" as="select" placeholder="Select Category" className="input-field">
                      <option>Select Category</option>
                      <option value="Category1">Category1</option>
                      <option value="Category2">Category2</option>
                      <option value="Category3">Category3</option>
                    </Field>
                    <ErrorMessage name="categoty" className='error' component="div" />
                  </div>
                  <div className="col-md-6">
                    <Field name="frequency" as="select" placeholder="Select Frequency" className="input-field">
                      <option>Select Frequency</option>
                      <option value="Frequency1">Frequency1</option>
                      <option value="Frequency2">Frequency2</option>
                      <option value="Frequency3">Frequency3</option>
                    </Field>
                    <ErrorMessage name="frequency" className='error' component="div" />
                  </div>
                  <div className="col-md-12">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email" className="input-field"
                    />
                    <ErrorMessage name="email" className='error' component="div" />
                  </div>
                </div>
                <button type="submit" className='register-btn' disabled={isSubmitting}>Register Now</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Home