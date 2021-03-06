import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModules } from "../shared.modules";
import { VisualizerComponent } from "../visualizer/visualizer.component";
import { SortItemComponent } from "./sort-item/sort-item.component";
import { SortStartComponent } from "./sort-start.component";


@NgModule({
    declarations: [
        SortItemComponent,
        SortStartComponent,
        VisualizerComponent,
    ],
    imports: [
        SharedModules,
        RouterModule.forChild([
            { path: '', component: SortStartComponent }
        ])
    ]
})
export class SortingModule {

}