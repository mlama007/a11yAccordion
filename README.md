# ***Accordion***

https://mlama007.github.io/a11yAccordion/

The accordion buttons and associated content are set up in an unstructured list here. This, like having navigation links in a list, allows a visually impaired user to know how many accordion elements there are, giving them a better sense of the page and content with which they are dealing.

### [Accordion using buttons](https://codepen.io/mlama007/pen/QBWqqe) 
* Buttons are used as the accordions so that they are tab-able by keyboard users and accessible to screen readers.
* Buttons do not have to be unside a list; however, each button and content element must be within a parent element.
</br>

### _Functionality_
* Navigate to each accordion button with the `Tab` key.
* Press `Enter` or `Space` to open each accordion
* Tabbing will take you to each accordion button and any open content

HTML
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Create element with class of "accodion" -->
<!-- Let the user know explicitly that they are dealing with accordions with aria-label -->
<div class="accordion" aria-label="Accordion Control Group Buttons">
    <ul>
        <li>
            <!-- Buttons must be used  -->
            <button>Circle strategic</button>
            <!-- button must contain sibling element with content -->
            <div>
                <p> Circle back strategic high-level 30,000 ft view so golden goose, yet today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud .</p>
                <p>On this journey blue money.</p>
            </div>
        </li>

        <li>
        <button>UX powerPointless</button>
        <div>
            <p>We've got to manage that low hanging fruit UX powerPointless, yet baseline the procedure and samepage your department, or window-licker hit the ground running.</p>
            <p>Bake it in.</p>
        </div>
        </li>
        <li>
        <button>Design thinking</button>
        <div>
            <p>Circle back value-added UI, or globalize, for we need to harvest synergy effects. Design thinking. Translating our vision of having a market leading platfrom digital literacy for thought shower cannibalize.</p>
        </div>
        </li>
    </ul>
</div>      
```