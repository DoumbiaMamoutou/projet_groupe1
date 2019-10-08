Vue.component('navbar',{
    props: [],
    template: `<nav id="navbar-header" class="navbar navbar-expand-lg">
    <div class="container">
        {% for item in presentation %}
        <a class="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile" href="#">
            <img src="{{ item.image.url }}" alt="">
        </a>
        {% endfor %}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="lnr lnr-menu"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex justify-content-between">
                <li class="nav-item only-desktop">
                    <a class="nav-link" id="side-nav-open" href="#">
                        <span class="lnr lnr-menu"></span>
                    </a>
                </li>
                <div class="d-flex flex-lg-row flex-column">
                    <li class="nav-item active">
                        <a class="nav-link" href="{% url 'resto:index' %}">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'configuration:about' %}">About</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Special Dishes
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{% url 'resto:special' %}">Beef Steak Sauce</a>
                        <a class="dropdown-item" href="{% url 'resto:special' %}">Salmon Zucchini</a>
                        </div>
                    </li>
                </div>
            </ul>
            
            <a class="navbar-brand navbar-brand-center d-flex align-items-center only-desktop" href="#">
                <img src="/static/img/logo.png" alt="">
            </a>
            <ul class="navbar-nav d-flex justify-content-between">
                <div class="d-flex flex-lg-row flex-column">
                    <li class="nav-item active">
                        <a class="nav-link" href="{% url 'resto:menu' %}">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'resto:team' %}">Team</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link" href="{% url 'clientel:reservation' %}">Reservation</a>
                    </li>
                </div>
                <li class="nav-item">
                    <a id="side-search-open" class="nav-link" href="#">
                        <span class="lnr lnr-magnifier"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
})