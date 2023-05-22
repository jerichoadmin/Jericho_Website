import React, { useState } from 'react';
import './FlipCard.css';

function FlipCard({ id, name }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


const jan_array = [
    'Make plans for gardens and landscape.',
    'On sunny days, do some winter pruning.',
    'Water trees, shrubs and garden.',
    'Inspect houseplants, repot if needed, mildly fertilize and clean up.',
    'Apply Bonide All Seasons spray to fruit trees, shade trees and shrubs.',
    'Prepare gardening tools for spring, clean sharpen and oil.',
    'Check our website for a list of upcoming seminars.',
    'Attend January seminars.',
    'Pledge to read all labels thoroughly on fertilizers, pesticides, and herbicides that you will use all year.'
]
const feb_array = [
  'Transplant mislocated plants.',
  'Spruce up outdoor containers with pansies, kale and dusty miller.',
  'Clean up perennial beds, carefully turn soil and add compost. Keep an eye out for bulbs.',
  'Prune fruit trees.',
  'Add compost to fruit and berry beds.',
  'Prune shade trees.',
  'Prune summer and fall blooming shrubs.',
  'Strong spray of water on evergreens and look for early aphids.',
  'Spray Bonide dormant oils on evergreens, except blue spruce.',
  'Deep water all trees and shrubs.',
  'Dethatch, aerate and water lawns.',
  'Start broccoli, cabbage, lettuce and slow growing annuals indoors.',
  'Plant flowering sweet peas.',
  'Start new compost pile.',
  'Come in and meet our friendly staff and find out what’s new for the coming year.',
  'Attend February seminars.',
  'Purchase plants for Valentines Day.',
  'Eliminate winter annual weeds, such as wild mustard.'
]
const mar_array = [
'Plant lettuce, radishes, carrots, peas, beets and turnips.',
'Plant cool season vegetables such as cabbage, cauliflower, Brussels sprouts and broccoli mid-month.',
'Plant onion sets.',
'Plant tomatoes in Early Season Plant Protectors.',
'Plant second planting of lettuce after the 15th of March.',
'Plant hardy annuals and perennials. Great time to divide summer and fall blooming perennials.',
'Plant strawberries, rhubarb and asparagus.',
'It’s a great time to plant trees and shrubs. See our planting guide for specifics.',
'Water and feed evergreens.',
'Water and fertilize trees and shrubs.',
'Water and fertilize perennial gardens.',
'Fertilize cool season lawns early in March. Use Jericho’s Sure Green; it has a 16-8-8 formula with iron and sulfur for our New Mexico soils.',
'Apply Bonide pre-emergent.',
'Re-seed cool season lawns in mid to late March.',
'Good time to sod cool season lawns.',
'Apply Bonide All Seasons Dormant Oil, if not already done, before bud open. Dormant oil, lime sulfur 3 weeks later.',
'Remove heavy winter mulches and replace with fresh cypress or pecan mulch by late March.',
'Prune berry and grapes in late March, except Heritage raspberries, which are pruned in fall.'
]
const apr_array = [
'Average last frost is April 17th, latest on record is May 10th; cover crops if frost predicted.',
'Visit Jericho for all your yard and garden needs.',
'Plant tomatoes in early season plant protectors.',
'Plant fruit and shade trees as well as shrubs.',
'Plant dahlia, canna, gladiolus and lily bulbs.',
'Plant strawberries, raspberries, currant, grapes, asparagus, potatoes and hardy herbs',
'Plant ornamental grasses.',
'Replace high pollen producing plants if you’re allergic to them.',
'Fertilize spring flowering bulbs, do not remove green leaves until they turn brown.',
'Sod or seed cool season lawns.',
'Treat for grubs now and again in August.',
'Apply Suregreen Grass and Weed Barrier pre-emergent weed control to perennial beds and lawns.',
'Prune spring flowering shrubs as they finish blooming.',
'Prune frost damage on roses and grapes.',
'Inspect for pinion scale and early aphids and treat as recommended.',
'Inspect and repair drip irrigation in garden and sprinkler system in lawn areas.',
'Revitalize garden beds with compost.',
'New selection of Weeks Roses arrive at Jericho.'
]
const may_array = [
  'Plant warm season vegetables like tomatoes, green chiles, eggplant and squash.',
  'Plant annual flowering plants. Color, color!',
  'Plant perennial flowering plants.',
  'Plant window boxes and container planters.',
  'Plant roses and fertilize existing ones.',
  'Plant warm season natives.',
  'Seed warm season grasses.',
  'Sod cool season lawns.',
  'Fertilize existing warm season grasses',
  'Inspect and treat for insects and weeds.',
  'Find out about IPM: Integrated Pest Management',
  'Check for elm leaf beetles, spider mites and bagworms.',
  'Properly adjusted irrigation systems will reduce water usage.',
  'Adjust watering with temperature and wind.',
  'Water new plantings daily; consult us about individual plant requirements.',
  'Deadhead flower blossoms now and throughout the summer for fabulous reblooming!',
  'Treat petunias, geraniums and tomatoes with BT for caterpillars.',
  'Fox urine scares the beejebers out of rabbits so maybe they won’t eat all your new plants.',
  'Remember your Mama!'
]
const jun_array = [
  "Install rain barrels for the upcoming monsoon.",
  "Look into water rebates from the City of Albuquerque for water harvesting.",
  "Adjust watering schedule to increasing temperatures and city watering ordinances.",
  "Check for clogs in drip systems.",
  "Fertilize roses for continuous blooming.",
  "Fertilize flowering annuals and perennials now with Bloom Max.",
  "Plant tomatoes and use Superthrive on newly planted vegetables.",
  "Mulch your plants as weather warms to keep soil cool and conserve moisture.",
  "Attack weeds with Bonide herbicides.",
  "Apply second application of Bonide pre-emergent to gardens and open spaces.",
  "Spray for insects and diseases on vegetables and ornamental plants.",
  "Apply second application of BT to geraniums, petunias and tomatoes.",
  "Continue fruit tree disease and insect control.",
  "Remove sucker or off-shoot growth from trees.",
  "Apply heavy mulch around shrubs, especially newly planted ones.",
  "Continue deadheading as needed.",
  "Safe to put certain house plants outdoors in the shade and protected from the wind.",
  "East Mountain area can start planting now.",
  "Kick back and enjoy your yard and garden!",
  "Plant warm season vegetables like tomatoes, green chiles, eggplant and squash.",
  "Plant annual flowering plants. Color, color!",
  "Plant perennial flowering plants.",
  "Plant window boxes and container planters.",
  "Plant roses and fertilize existing ones.",
  "Plant warm season natives.",
  "Seed warm season grasses.",
  "Sod cool season lawns.",
  "Fertilize existing warm season grasses",
  "Inspect and treat for insects and weeds.",
  "Find out about IPM: Integrated Pest Management",
  "Check for elm leaf beetles, spider mites and bagworms.",
  "Properly adjusted irrigation systems will reduce water usage.",
  "Adjust watering with temperature and wind.",
  "Water new plantings daily; consult us about individual plant requirements.",
  "Deadhead flower blossoms now and throughout the summer for fabulous reblooming!",
  "Treat petunias, geraniums and tomatoes with BT for caterpillars.",
  "Fox urine scares the beejebers out of rabbits so maybe they won’t eat all your new plants. Do the same you have done with the other lists"
];

const jul_array = [
  'Be prepared for the hot weather by adjusting your watering schedule in keeping with city ordinances; gardening in the morning or evening, mulch around plants and properly maintaining your irrigation system.',
  'Harvest rain water with rain barrels.',
  'Install ollas in containers or other areas that may dry out too quickly.',
  'Move container plantings to a more shaded area if plants look stressed by too much heat.',
  'Apply BT to bud worn or caterpillar damaged plants, i.e. tomatoes, petunias or geraniums.',
  'Deep water established trees, shrubs, roses and flowering plants at least twice a week.',
  'Continue to mulch with cypress, cedar, or pecan mulch. It conserves water as well as suppresses weeds.',
  'Continue deadheading and cut flowers for bouquets for continuous flowering.',
  'Pinch chrysanthemums buds back by the 4th of July for a blaze of spectacular color in fall.',
  'Check for grubs in lawn areas and treat with Bonide Grub Beater as needed.',
  'Mow cool season lawn grasses 2 to 3 inches high during hot weather.',
  'Do not fertilize cool season grasses with high nitrogen fertilizers. If lawn is yellowing, apply an iron supplement.',
  'Best to plant squash plants now (as opposed to earlier) to avoid squash bugs.',
  'Plant green beans before mid-month.',
  'Check for pests and diseases on trees and shrubs.',
  'Treat for borers on trees and fruit trees with Captain Jack’s Dead Bug (spinosad). Saturate trunk and base of tree.',
  'Spray fruit trees with Bonide Fruit Tree Spray to protect developing fruit.',
  'Thin fruit or stake heavy fruit tree branches or fast growing plants before any breakage occurs'
]
const aug_array = [
  'Give thanks for the rain.',
  'Plant cool season lettuce, radish, beets, turnips, carrots, broccoli, cauliflower and Brussels sprouts by mid-August.',
  'Build up your herb perennial garden.',
  'Continue weed control.',
  'Continue deep watering.',
  'Continue looking for pests and diseases.',
  'Treat for borers with Captain Jack’s Dead Bug (spinosad).',
  'Trick or treat for slugs and snails with Sluggo.',
  'Great time to sod a cool season lawn.',
  'Seed cool season lawns.',
  'Divide and plant iris.',
  'Keep fruit and vegetables cleaned up to prevent future problems with insects and diseases.',
  'Perfect time for sowing wild flowers seeds.',
  'Plan and plant for fall trees, shrubs and perennials.',
  'Harvest time begins. Enjoy.',
  'Check out all the great deals on trees, shrubs and perennials at Jericho. Truly the BEST time.'
]
const sep_array = [
  'Time to roast green chile.',
  'Enter your great harvest of vegetables and flowers at the State Fair.',
  'Fall is an excellent time to plant trees, shrubs and perennials.',
  'Plant mums and pansies in a sunny area for fall.',
  'Plant spring flowering bulbs, such as, crocus, daffodils, hyacinth and tulips with bulb food.',
  'Divide and plant peonies.',
  'Plant cool season vegetables in cold frames.',
  'Fertilize cool season lawns late September or early October with Jericho Sure Green Fertilizer, 16-8-8.',
  'Reseed cool season lawns.',
  'Cut back on watering as the weather cools down.',
  'Continue to monitor and treat for borers.',
  'Continue to clean debris in garden and check for insects and weeds.',
  'Bring in house plants; check and treat for any insects and repot as necessary and use Superthrive.'
]
const oct_array = [
  'Stop by Jericho after the Balloon Fiesta and pick up a fresh ristra or two for our Southwestern flare.  ',
  'Harvest your pumpkins, gourds and ornamental corn, or stop by Jericho and pick up a big one for a Jack-o-Lantern.',
  'Still time to plant spring flowering bulbs. Soil preparation and a super phosphate is a must.',
  'Plant ornamental grasses.',
  'Plant perennial seeds that need cold stratification for spring germination, like poppies or wild flower seeds.',
  'Plant pansies and kale in containers.',
  'Plant trees, shrubs and perennials. Fall sale is still going on at Jericho.',
  'Winterize cool season lawns if you have not already done so.',
  'Top dress garden beds with Back to Earth Compost or Enriched Mulch.',
  'Clean ponds and waterfalls of leaves and debris.',
  'Clean up any fruits and vegetables that may be rotting and dispose of tomato plants.',
  'Last treatment for stone fruit for peach tree borers.',
  'Winterize your irrigation systems.',
  'Clean and store all gardening equipment and tools.',
  'Clean and store containers or pots not in use.',
  'Lift begonias, cannas, dahlias and gladiolus and store if they are in an area that will freeze.',
  'Prune peonies down to 6″ and top dress with mulch.',
  'Prune pyracantha to show off berries for winter color.',
  'Deep water established trees, shrubs and flower beds monthly. New plantings will require more the first year.'
]
const nov_array = [
  'Check the previous two months for anything you might have missed.',
  'Plant up amaryllis and paper whites for Christmas blooming indoors.',
  'Set water lilies deeper in pond to prevent freezing.',
  'Use tree wrap on young trees to prevent winter injury.',
  'Special order your poinsettias and Christmas plants early.'
]
const dec_array = [
  'Select one of our Canada grown, classic Christmas trees. They are fresh cut and kept in water so they will be the freshest tree around.',
  'Have your tree flocked for something different.',
  'Check out our live Christmas trees and we will hold one for you until shortly before Christmas. You do not want to keep them indoors for more than 5 days.',
  'Deck the halls with our fresh garland and wreaths.',
  'Get your poinsettias, Christmas cactus, amaryllis and paperwhites early in the month. We always sell out before Christmas.',
  'Check out our Christmas shop for traditional, whimsical, or southwestern ornaments and holiday fare.',
  'Deep water trees, shrubs and perennial beds.',
  'Check trees and shrubs for any broken branches due to wind or snow and selectively prune.',
  'Have a happy and safe New Year!'
]
 

const dataArray = [
  {name: 'January', array: jan_array},
  {name: 'February', array: feb_array},
  {name: 'March', array: mar_array},
  {name: 'April', array: apr_array},
  {name: 'May', array: may_array},
  {name: 'June', array: jun_array},
  {name: 'July', array: jul_array},
  {name: 'August', array: aug_array},
  {name: 'September', array: sep_array},
  {name: 'October', array: oct_array},
  {name: 'November', array: nov_array},
  {name: 'December', array: dec_array},
]

const { array } = dataArray.find(({ name: monthName }) => monthName === name) || { array: [] };



  return (
    <div className={`flip-card${isFlipped ? ' flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{name}</p>
        </div>
        <div className="flip-card-back">
          <div className='flip-card-list'>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
