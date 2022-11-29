
const MapSection: React.FC = () => {
  return (
    <iframe 
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.39963678752!2d17.841971189878702!3d59.326066813960814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1666772914792!5m2!1ssv!2sse" 
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default MapSection