import { Logo } from './components/Logo/Logo';
import { Header } from './components/Header/Header';
import { CustomerLinks } from './components/CustomerLinks/CustomerLinks';
import { Footer } from './components/Footer/Footer';

const customerLinks = [
  {
    href: "https://myuserpool-domain.auth.us-east-1.amazoncognito.com/login?client_id=3qtbgn503ttnmd75qc6iat3vnt&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fcdwcustomer1.s3.amazonaws.com%2Findex.html",
    text: "Customer1 Metrics"
  },
  {
    href: "https://myuserpool2-domain.auth.us-east-1.amazoncognito.com/login?client_id=40j5jiq97t90g7jsvjnh1nc66n&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fcdwcustomer2.s3.amazonaws.com%2Findex.html",
    text: "Customer2 Metrics"
  }
];

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdwcustomapplication.s3.amazonaws.com/image_(4)-j1f3dsnvn-transformed.jpeg')"
      }}
    >
      <Logo />
      <Header 
        title="The CDW MetricVision"
        subtitle="The ultimate page to monitor your metrics..."
      />
      <CustomerLinks links={customerLinks} />
      <Footer />
    </div>
  );
}

export default App;