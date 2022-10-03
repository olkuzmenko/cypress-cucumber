Feature: Log in form

    Background:
    Given A web browser is at the telnyx login page
    Scenario: Using invalid email for authorization
        When A user enters the invalid email "bobhambob123456@gmail.co", the password "Telnyx1234567@", and clicks on the login button
            | email                   | password       |
            |bobhambob123456@gmail.co | Telnyx1234567@ |
        Then The login error message "That email and password combination is not valid" is displayed
    Scenario: Using invalid password for authorization
        When A user enters the email "bobhambob123456@gmail.com", the invalid password "Telnyx123456", and clicks on the login button
            | email                    | password      |
            |bobhambob123456@gmail.com | Telnyx123456 |
        Then User sees the error message "That email and password combination is not valid"
    Scenario: Reset password using valid email
        When A user clicks forgot password button, enters email "example61123@gmail.com", clicks reset password
        Then A user sees message "We have accepted your password reset request"
    Scenario: Reset password using invalid email
        When A user clicks forgot password button, enters invalid email "example", clicks reset password
        Then A user sees success message "We have accepted your password reset request"
    Scenario: Single sign-on using invalid company email
        When A user clicks Single Sign-On, enters invalid company email "example123@gmail.com", clicks continue
        Then A user sees error message that "The requested resource or URL could not be found."
    Scenario: Single sign-on using invalid company name
        When A user clicks Single Sign-On, clicks company name, enters invalid company name "example", clicks continue
        Then A user sees the error message that "The requested resource or URL could not be found."
    Scenario: Single sign-on using empty company name
        When A user clicks Single Sign-On, clicks company name, lives empty company name, clicks continue
        Then A user sees error message at company name field "Required"
    Scenario: Single sign-on using empty company email
        When A user clicks Single Sign-On, lives empty company email, clicks continue
        Then A user sees error message at company email field "Required"
    Scenario: Resent verification email, using valid email
        When A user clicks resend button, enters valid email "bobhambob12356@gmail.com", clicks submit button
        Then A user sees the message "If your email address exists in our database, you will receive an email"
    Scenario: Resent verification email, using invalid email random symbols
        When A user clicks resend button, enters invalid email "$#%@#$", clicks submit button
        Then A user sees the message that contains "If your email address exists in our database, you will receive an email"
