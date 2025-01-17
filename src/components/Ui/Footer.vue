<script setup>

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
</script>

<template>
    <footer class="border-t bg-blue-950">
        <div>
            <div
                class="footer max-w-full text-white p-10 flex flex-col md:flex-row justify-evenly"
            >
                <aside>
                    <img src="/images/feliya.png" class="h-24" />
                    <p>
                        <span class="footer-title text-4xl inline-block mb-4"
                            >Feliya Laju Teknik</span
                        >
                    </p>
                    <div>
                        <h1 class="text-xl font-semibold">
                            Leeon, GMI Building Jl.Srengseng Sawah <br> No.004 RT.002 RW.007
                            Kel.Srengseng Sawah Kec.Jagakarsa,<br> Kota ADM.Jakarta
                            Selatan, DKI Jakata 12640
                        </h1>
                        <h1 class="text-lg font-thin">
                            (021) 2780-5886 | (+62) 878-7691-3139
                        </h1>
                        <h1 class="text-lg font-thin">
                            feliyateknik@gmail.com |
                            financefeliyalajuteknik@gmail.com
                        </h1>
                    </div>
                </aside>

                <nav>
                    <span class="footer-title text-2xl">Layanan</span>
                    <a @click.prevent="scrollToSection('services')" class="link link-hover">Air Conditioner</a>
                    <a @click.prevent="scrollToSection('services')" class="link link-hover">Air Dryer</a>
                    <a @click.prevent="scrollToSection('services')" class="link link-hover">Refrigerasi</a>
                </nav>

                <nav>
                    <span class="footer-title text-2xl">Company</span>
                    <a @click.prevent="scrollToSection('home')" class="link link-hover">Home</a>
                    <a @click.prevent="scrollToSection('about')" class="link link-hover">About Us</a>
                    <a @click.prevent="scrollToSection('contact')" class="link link-hover">Contact</a>
                    <a @click.prevent="scrollToSection('choose')" class="link link-hover">Why Choose Us</a>
                </nav>

                <nav>
                   <span class="footer-title text-2xl">Sosial Media</span>
                    <a class="link link-hover">Facebook</a>
                    <a class="link link-hover">Instagram</a>
                    <a href="https://wa.me/6287876913139" target="_blank" rel="noopener noreferrer" class="link link-hover">Whatsapp</a> 
                </nav>
            </div>
        </div>
    </footer>
</template>


