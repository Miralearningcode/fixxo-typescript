import React from 'react'

interface AlertNotificationProps {
    alertProps: string
    title: string
    text: string
}

const AlertNotification: React.FC<AlertNotificationProps> = ({alertProps = "warning", title, text}) => {
  return (
    <div className={`alert alert-${alertProps} text-center mb-5`} role="alert">
        <h3>{title}</h3> 
        <p>{text}</p>
    </div>
  )
}

export default AlertNotification