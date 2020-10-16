import React from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';
import PieSVG from './PieSVG';
// import PieClass from './PieClass';

export default class HomePage extends React.Component {
    

    constructor(props){
        super(props);
        this.state = {
            Data: {},
            resultData:[]
          }
      } 

    componentDidMount() {
       
        axios.get(`http://localhost:5000/budget`)
          .then(res => {
            const budgetData = res.data.myBudget;
            let labelsValue = [];
            let values = [];
            let thisData={};
            let jData=[];
            budgetData.forEach(element => {
                labelsValue.push(element.title);
              values.push(element.budget);
              thisData={
                "label": element.title,
                "value": element.budget
              }
              jData.push(thisData);
            });
            // console.log(jData.length);
            this.setState({ 
              Data: {
                labels: labelsValue,
                datasets:[
                   {
                      label:'Personal Budget Chart',
                      data: values ,
                      backgroundColor:[
                  '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#d0743c',
                    '#ff8c00',
                    '#6b486b'
                    ]
                   }
                ]
             },
             resultData:jData
             });
          })
      }
 
    render() {
        const {data} = this.props;
        console.log(data);
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
        
                       <div>
                              <Pie
                                data={this.state.Data}
                                options={{
                                    title:{
                                    display:true,
                                    // text:'Average Rainfall per month',
                                    fontSize:20
                                    },
                                    legend:{
                                    display:true,
                                    position:'right'
                                    }
                                }}
                                />
                        </div>
                                    
                       <h1>DJ3 Chart</h1>
                       
                        <div id="viz_area">
                          <PieSVG
                            data={this.state.resultData}
                            width={400}
                            height={400}
                            innerRadius={80}
                            outerRadius={160}
                           /></div>  
                           
                            {/* <PieClass 
                            data={this.state.resultData}
                            width={400}
                            height={400}
                            innerRadius={80}
                            outerRadius={160}
                           /> */}
                           {/* <button className="randomize">randomize</button> */}
                           
                       
             
                                
               </div>
        
           </div>
        </div>
        )
      }
}



// export default HomePage;
