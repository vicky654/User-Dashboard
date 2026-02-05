import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

const ComingSoonCover = () => {
  const dispatch = useDispatch();
  const [demo1, setDemo1] = useState<any>({ days: '--', hours: '--', minutes: '--', seconds: '--' });
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
  
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const countDownDate = date.getTime();

    const id = setInterval(() => {
      const now = Date.now();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(id);
        setDemo1({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      setDemo1({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
      });
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optional: shorten this array for mapping
  const countdownArray = [
    { label: 'Days', value: demo1.days },
    { label: 'Hours', value: demo1.hours },
    { label: 'Minutes', value: demo1.minutes },
    { label: 'Seconds', value: demo1.seconds },
  ];

  return (
 

      <div className="relative w-full  flex flex-col rounded-lg overflow-hidden shadow-xl bg-white/70 dark:bg-black/60 backdrop-blur-lg lg:flex-row lg:gap-10 p-4 sm:p-10">
    
        
        <div className="hidden lg:flex flex-col items-center justify-center flex-1 max-w-md p-8 relative">
       
          <div className="w-full max-w-[280px]">
            <img src="/assets/images/auth/coming-soon-cover.svg" alt="Coming Soon Cover" className="w-full" />
          </div>
        </div>
        
        {/* Right Side - Main Content */}
        <div className="flex-1 flex flex-col justify-center px-2 pt-8 sm:px-8">

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4  text-primary text-xl font-bold tracking-wider">
          <div className="mb-8">
            <h1 className="text-2xl  font-extrabold uppercase text-primary !leading-snug">
              Page Not Found — Coming Soon!
            </h1>
            <p className="text-base font-semibold leading-normal text-gray-700 dark:text-white-dark mt-2">
              We will be here in a short while...
            </p>
          </div>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <button
              type="button"
              className="btn btn-primary w-full sm:w-auto px-8 py-3 mt-2 rounded-lg text-base shadow-md bg-primary text-white font-semibold transition "
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>

        
        </div>
      </div>
  
  );
};

export default ComingSoonCover;
