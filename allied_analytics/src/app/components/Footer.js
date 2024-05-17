'use client'
import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Footer = () => {
  return (
    <>
        <footer className='section-padding padding-bottom-0'>
            <div className="container">
                <div className="row align-center">
                    <div className="col-md-4">
                    <Formik
                        initialValues={{email: ""}}
                        validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Please enter email address";
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = "Invalid email address";
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
                            <div className='footer-input-field-box input-field-box'>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Your e-mail"
                                />
                                <ErrorMessage name="email" component="div" />
                                <button className='register-btn' type="submit" disabled={isSubmitting}>Register</button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    </div>
                    <div className="col-md-8">
                        <div className="footer-links-area">
                            <p className='main-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatum, reprehenderit dignissimos aperiam doloribus aliquam, obcaecati nam accusantium ut unde quod dolores maxime rem vero perferendis ipsum expedita incidunt? Vitae.</p>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-links-box">
                                        <h5 className='footer-link-title'>The Componay</h5>
                                        <ul>
                                            <li>
                                                <Link href="/">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Why Research Dive?</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Research Methodology</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Career</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-links-box">
                                        <h5 className='footer-link-title'>Services</h5>
                                        <ul>
                                            <li>
                                                <Link href="/">Syndicate Reports</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Customize Reports</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Consulting Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-links-box">
                                        <h5 className='footer-link-title'>Find Help</h5>
                                        <ul>
                                            <li>
                                                <Link href="/">GDPR Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Return Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Delivery Method</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Terms and Condition</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-extra-links">
                                <ul className='flex-box align-center'>
                                    <li>
                                        <Link href=''>Disclaimer</Link>
                                    </li>
                                    <li>
                                        <Link href=''>Sitemap</Link>
                                    </li>
                                    <li>
                                        <Link href=''>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className='copyright-text'>
                                &copy; 2023 Research Dive. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer