import React from 'react';

function HomePage() {
  return (
    <div id="mainid">
    <div>
       <aside>
           <p> Features available in the Personal budget management app !!!</p>
           </aside> 
    </div>
    

   <div className="container center">

       <div className="page-area">

           <div className="text-box" tabIndex="0">
               <h1 title="Stay on track">Stay on track</h1>
               <p>
                   Do you know where you are spending your money? If you really stop to track it down,
                   you would get surprised! Proper budget management depends on real data... and this
                   app will help you with that!
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Alerts</h1>
               <p>
                   What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Results</h1>
               <p>
                   People who stick to a financial plan, budgeting every expense, get out of debt faster!
                   Also, they to live happier lives... since they expend without guilt or fear... 
                   because they know it is all good and accounted for.
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Free</h1>
               <p>
                   This app is free!!! And you are the only one holding your data!
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Stay on track</h1>
               <p>
                   Do you know where you are spending your money? If you really stop to track it down,
                   you would get surprised! Proper budget management depends on real data... and this
                   app will help you with that!
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Alerts</h1>
               <p>
                   What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
               </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Results</h1>
               <p>
                   People who stick to a financial plan, budgeting every expense, get out of debt faster!
                   Also, they to live happier lives... since they expend without guilt or fear... 
                   because they know it is all good and accounted for.

                       </p>
           </div>
   
           <div className="text-box" tabIndex="0">
               <h1>Free</h1>
               <p>
                   This app is free!!! And you are the only one holding your data!                    
                   
               </p>
           </div>
           
               <h1>Chart</h1>
               <p>
                   <canvas id="myChart" width="300" height="120"></canvas>                  
                   
               </p>
           
           
               <h1>DJ3 Chart</h1>
               <div id="viz_area"></div>               
                  
                   <svg width="400" height="1"></svg>
                   <button className="randomize">randomize</button>
               
     
                        
       </div>

   </div>
</div>
  );
}

export default HomePage;
