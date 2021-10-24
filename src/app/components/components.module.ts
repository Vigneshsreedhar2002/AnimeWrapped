import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { RouterModule } from "@angular/router";
//import { IgxDoughnutChartModule } from "igniteui-angular-charts";
import { NavigationComponent } from "./navigation/navigation.component";
import { SignupComponent } from "./signup/signup.component";
import { TypographyComponent } from "./typography/typography.component";
import { NucleoiconsComponent } from "./nucleoicons/nucleoicons.component";
import { ComponentsComponent } from "./components.component";
import { NotificationComponent } from "./notification/notification.component";
import { NgbdModalComponent } from "./modal/modal.component";
import { NgbdModalContent } from "./modal/modal.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { VisualizationsComponent } from "./visualizations/visualizations.component";
import { SuggestionsComponent } from "./suggestions/suggestions.component";
import { HottakesComponent } from "./hottakes/hottakes.component";
import { NewsuggestionsComponent } from "./newsuggestions/newsuggestions.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
  ],
  declarations: [
    ComponentsComponent,
    NavigationComponent,
    SignupComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NotificationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    StatisticsComponent,
    VisualizationsComponent,
    SuggestionsComponent,
    HottakesComponent,
    NewsuggestionsComponent,
  ],
  entryComponents: [NgbdModalContent],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
