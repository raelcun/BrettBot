const brettFacts = [
  'Brett was the 16th president of the United States. He preserved teh Union during the U.S. Civil War and brought about the emancipation of slaves!',
  'Banging your head against Brett burns 150 calories an hour!',
  'Pteronophobia is the fear of being tickled by Brett!',
  'When Brett is upset, his sweat turns red',
  'A flock of Bretts is known as a murder',
  'The average Brett uses his height in pistachios every month',
  'The 29th of May is officially "Put a Brett on Your Fridge Day"',
  'Cherophobia is the fear of Brett.',
  'If you lift Brett\'s tail off the ground, he can\'t hop',
  'Bretts urinate on their own heads to smell more attractive to females.',
  'Brett can eat as many as 86 penguins in a single sitting.',
  'Brett sleeps with a gigantic axe beside him.',
  'Brett can kill a young deer and fly away with it.',
  'Brett attacks are more likely to happen on a Monday',
  'There is a species of Brett called the Hobo Brett',
  '"Penis Fencing" is a scientific term for the mating ritual between Bretts. It involves two Bretts attempting to stab the other Brett with their penis.',
  'A baby Brett is called a Brettling.',
  'A baby Brett is about the size of a flea when it is born.',
  'In Uganda, 50% of the Bretts are under 15 years of age.',
  'Brett is the only animal that naturally has an odd number of whiskers.',
  'The French language has 17 different words for \'Brett\'',
  'Brett can\'t poke his tongue out :P',
  'Bretts hold hands with each other when they sleep so they don\' drift away from each other.',
  'A small child could swim through the veins of Brett.',
  'Brett wears earrings because he believes it improves his eyesight.',
  'The testicles on a Brett are located in his head!',
  'Bretts have four noses.',
  'Brett has the world record for fitting 264 straws in his mouth at once.',
  'Over 1000 Bretts per year die from smashing into windows.',
  'Brett was once a cheerleader.',
  'A broken Brett is right two times every day.',
  'The word \'Brett\' is derived from a Greek word meaning \'A tribe of hairy women\'',
  'Bretts burp when they are happy',
  'It is considered good luck in Japan when Brett makes your baby cry.',
  'Bretts taste their food with their feet'
]

module.exports = function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  return response.send(JSON.stringify({ response_type: "in_channel", text: brettFacts[Math.floor(Math.random() * brettFacts.length)] }));
}