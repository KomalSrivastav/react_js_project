import './404_error.css'
export function Error_404(){
    return(

        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>4<span>0</span>4</h1>
			</div>
			<h2>the page you requested could not found</h2>
			<form class="notfound-search">
				<input type="text" placeholder="Search..."/>
				<button type="button"><span></span></button>
			</form>
		</div>
	</div>

    )

}