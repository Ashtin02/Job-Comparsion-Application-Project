"use strict";

(function() {

    
    window.addEventListener('load', init);


        function init(){
        const btn = id('compare-button');

        btn.addEventListener('click', async (e) => {

            e.preventDefault();
            const filtersRef = qsa('.filter');
            const filters = getFilters(filtersRef);

            const job1 = getJob1Info();
            const job2 = getJob2info();

            const results = jobComparison(filters, job1, job2);

            localStorage.setItem('results', results.join('\n'));
            resetForms();
            alert('Please visit the View/Save Results page to view your job comparison results!');

        })
        }


        function getJob1Info() {
            const job1Info = {};

            job1Info.name = id('job-1-name').value;
            job1Info.salary = Number(id('job-1-salary').value);
            job1Info.remote = id('job-1-remote').checked;
            job1Info.worklife = Number(id('job-1-workLife').value);
            job1Info.growth = Number(id('job-1-growth').value);
            job1Info.stocks = Number(id('job-1-stocks').value);

            return job1Info;
        }


        function getJob2info() {
            const job2Info = {};

            job2Info.name = id('job-2-name').value;
            job2Info.salary = Number(id('job-2-salary').value);
            job2Info.remote = id('job-2-remote').checked;
            job2Info.worklife = Number(id('job-2-workLife').value);
            job2Info.growth = Number(id('job-2-growth').value);
            job2Info.stocks = Number(id('job-2-stocks').value);

            return job2Info;
        }


        function jobComparison(filters, job1, job2) {
            let reasons = [];

            let job1Score = 0;
            let job2Score = 0;

            if (job1.salary  > job2.salary) {
                job1Score += filters.salaryFilter ? 2 : 1;
                const difference = job1.salary - job2.salary;
                reasons.push(`${job1.name} has a higher salary than ${job2.name} with a difference of ${difference}`);
            } else if (job1.salary < job2.salary) {
                job2Score += filters.salaryFilter ? 2 : 1;
                const difference = job2.salary - job1.salary;
                reasons.push(`${job2.name} has a higher salary than ${job1.name} with a difference of ${difference}`);
            } else {
                job1Score += 1;
                job2Score += 1;
                reasons.push('Both of the jobs are tied for the same amount of salary');
            }

            if (job1.remote && !job2.remote) {
                job1Score += filters.remoteFilter ? 2 : 1;
                reasons.push(`${job1.name} offers remote work while ${job2.name} does not`);
            } else if (!job1.remote && job2.remote) {
                job2Score += filters.remoteFilter ? 2 : 1;
                reasons.push(`${job2.name} offers remote work while ${job1.name} does not`);
            } else {
                job1Score += 1;
                job2Score += 1;
                reasons.push('Both jobs offer remote work as an option, or are entirely remote.'); 
            }

            if (job1.worklife > job2.worklife) {
                job1Score += filters.remoteFilter ? 2 : 1;
                reasons.push(`${job1.name} has a better work/life balance.`);
            } else if (job1.worklife < job2.worklife) {
                job2Score += filters.remoteFilter ? 2 : 1;
                reasons.push(`${job2.name} has a better work/life balance.`)
            }   else {
                job1Score += 1;
                job2Score += 1;
                reasons.push('Both jobs have an about even work/life balance when compared to one another.')
            }


            if (job1.growth > job2.growth) {
                job1Score += filters.growthFilter ? 2 : 1;
                reasons.push(`${job1.name} is known for having better career growth.`);
            } else if (job1.growth < job2.growth) {
                job2Score += filters.remoteFilter ? 2 : 1;
                reasons.push(`${job2.name} is known for having better career growth.`);
            }   else {
                job1Score += 1;
                job2Score += 1;
                reasons.push('Both jobs have an about even opportunity for career growth.');
            }

            if (job1.stocks > job2.stocks) {
                job1Score += filters.stocksFilter ? 2 : 1;
                reasons.push(`${job1.name} has better stock value for its employees.`);
            } else if (job1.stocks < job2.stocks) {
                job2Score += filters.stocksFilter ? 2 : 1;
                reasons.push(`${job2.name} has better stock value for its employees`)
            }   else {
                job1Score += 1;
                job2Score += 1;
                reasons.push('Both jobs provide about an equal amount of value via their stock valuation and options.');
            }

            if (job1Score > job2Score) {
                reasons.unshift(`${job1.name} had an overall better score with ${job1Score} points against ${job2.name}'s ${job2Score} when comparing their options offered. It 
                is our recommendation that based on the entered information and preferences you selected, you should go with their offer! \n`);
            } else if (job1Score < job2Score) {
                reasons.unshift(`${job2.name} had an overall better score with ${job2Score} points against ${job1.name}'s ${job1Score} when comparing their options offered. It 
                is our recommendation that based on the entered information and preferences you selected, you should go with their offer! \n`);
            } else {
                reasons.unshift(`You're spoiled for options! Both job offers are tied based on the information you entered and the preferences you selected. You can't go 
                wrong with either choice!`);
            }

            return reasons;
        }
    

        function getFilters(filtersRef) {
            const [salaryFilter, remoteFilter, worklifeFilter, growthFilter, stocksFilter] = Array.from(filtersRef);
            return { salaryFilter, remoteFilter, worklifeFilter, growthFilter, stocksFilter };

        }

        function resetForms() {
            const filterForm = id('filter-form');
            filterForm.reset();
            const job1Form = id('job-1-form');
            job1Form.reset();
            const job2Form = id('job-2-form')
            job2Form.reset();
        }
        
    

    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} id - element ID
     * @return {object} DOM object associated with id.
     */
    function id(id) {
        return document.getElementById(id);
    }



    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} query - CSS query selector.
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qs(query) {
        return document.querySelector(query);
    }

    /**
     * Returns the array of elements that match the given CSS selector.
     * @param {string} query - CSS query selector
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }
})();