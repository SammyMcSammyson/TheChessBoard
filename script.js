const text =
  'B-roll refers to supplemental or alternative footage that is intercut with the main shot in a film or video production. It is often used to enrich the storytelling, providing additional context, visual variety, or coverage.  It is in these behind-the-scenes moments that shape who I am. It’s in these everyday experiences, quiet reflections, and unpolished thoughts where any real story unfolds. While the big milestones might be the A-roll, it’s the little details, the candid moments, and the personal reflections—the B-roll—that tell the full story of how I am me...';
const container = document.getElementById('intro');

let index = 0;

function revealCharacter() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(revealCharacter, 25); // Adjust the speed by changing the delay
  }
}

// Start revealing the characters
revealCharacter();

let polaroidLeft = document.getElementById("polaroid.left")

polaroidLeft.addEventListener("mouseover", () => {

});

