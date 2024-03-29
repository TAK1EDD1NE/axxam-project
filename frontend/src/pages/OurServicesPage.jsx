import SectionOne from "../components/landing/SectionOne"

 function OurServicesPage() {
    const sectionOne = {
        imgUrl1: '/hi4.jpg',
        imgUrl2: '/hi.jpg',
        imgUrl3: '/hi5.jpg',
        span: 'House rental listings ',
        title: 'From cozy hideaways to luxurious abodes, find your perfect rental match with AXXAM.',
        desc :'Explore our extensive collection of rental listings, featuring a diverse range of properties tailored to your lifestyle. Each listing offers detailed descriptions, high-quality photos, and real-time availability updates, ensuring you find the ideal home with ease. Start your search today and unlock the door to your next adventure with AXXAM.'
        
      }
    
      const sectionTwo = {
        imgUrl1: '/hi15.jpg',
        imgUrl2: '/hi7.jpg',
        imgUrl3: '/hi12.jpg',
        span: 'Offers and promotions',
        title: 'Discover unbeatable offers and exclusive promotions on AXXAM.',
        desc: 'Take advantage of limited-time discounts, exclusive deals, and special promotions tailored just for you. Whether you’re seeking a budget-friendly getaway or looking to maximize your rental savings, our curated selection of offers ensures you get the most value out of your rental experience. Don’t miss out on these incredible opportunities—start saving today with AXXAM.'
       
        
      }
      const sectionThree = {
        imgUrl1: '/hi31.jpg',
        imgUrl2: '/hi16.jpg',
        imgUrl3: '/hi30.jpg',
        span: 'Earn Rewards with Every Rental Operation',
        title: 'Experience unparalleled advantages with AXXAM’s unique rewards system     .',
        desc: 'For each rental operation, property owners accrue points, determined by factors such as property price . Once you reach a set threshold ,unlock maximum benefits, ensuring 100% returns on your next rental while retaining 0% for the platform. Join AXXAM today and elevate your rental experience with our rewarding partnership program.'
        
        
      }
      const sectionFoor = {
        imgUrl1: '/hi17.jpg',
        imgUrl2: '/hi22.jpg',
        imgUrl3: '/hi19.jpg',
        span: 'AXXAM’s Lessor Dashboard',
        title: 'Take charge of your rental properties  with our sophisticated Lessor Dashboard.',
        desc: 'Our intuitive Lessor Dashboard provides property owners with comprehensive control over their listings, allowing for effortless management of rental properties. From viewing booking requests to tracking rental income, the dashboard offers unparalleled convenience and efficiency. Stay organized, informed, and in control with AXXAM’s Lessor Dashboard .',
        
      }
      
  return (
    <div className="  mt-28 md:mt-28 sm:mt-40  ">
    
        
      <SectionOne data={sectionOne} showButton={false} rtl />
      <SectionOne data={sectionTwo} showButton={false} ltr />
      <SectionOne data={sectionThree} showButton={false} rtl/>
      <SectionOne data={sectionFoor} showButton={false} ltr />
     
      
    
    </div>
  )
}
export default OurServicesPage ;