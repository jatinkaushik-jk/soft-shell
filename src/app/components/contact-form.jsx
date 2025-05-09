"use client"
import React, { useState } from 'react'
const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: 'enterprise',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.company.trim()) errors.company = 'Company is required';
        if (!formData.message.trim()) errors.message = 'Message is required';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            // Form is valid - would normally submit to server
            alert('Form submitted successfully!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                licenseType: 'enterprise',
                message: ''
            });
        } else {
            // Show errors
            setFormErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className={`block text-sm font-medium dark:text-gray-300 text-gray-700`}>
                    Name
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    />
                    {formErrors.name && <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>}
                </div>
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className={`block text-sm font-medium dark:text-gray-300 text-gray-700`}>
                    Email
                </label>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    />
                    {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
                </div>
            </div>

            {/* Company Field */}
            <div>
                <label htmlFor="company" className={`block text-sm font-medium dark:text-gray-300 text-gray-700`}>
                    Company
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    />
                    {formErrors.company && <p className="mt-2 text-sm text-red-600">{formErrors.company}</p>}
                </div>
            </div>

            {/* License Type Field */}
            <div>
                <label htmlFor="licenseType" className={`block text-sm font-medium dark:text-gray-300 text-gray-700`}>
                    License Type
                </label>
                <div className="mt-1">
                    <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleInputChange}
                        className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600}`}
                    >
                        <option value="enterprise">Enterprise Software</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="creative">Creative Software</option>
                        <option value="database">Database Licenses</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className={`block text-sm font-medium dark:text-gray-300 text-gray-700`}>
                    Message
                </label>
                <div className="mt-1">
                    <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600}`}
                    ></textarea>
                    {formErrors.message && <p className="mt-2 text-sm text-red-600">{formErrors.message}</p>}
                </div>
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm